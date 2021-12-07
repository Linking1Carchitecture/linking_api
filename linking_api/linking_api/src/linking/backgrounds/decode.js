import Blob from 'node-blob';

function decodeBase64Image(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
      response = {};
  
    if (matches.length !== 3) {
      return new Error('Invalid input string');
    }
  
    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');
  
    return response;
  }

  function multipartFormData (image) {
    var boundary = '----'+(new Date()).getTime();
    var bodyString = [];
    bodyString.push(
      '--' + boundary,
      'Content-Disposition: form-data; name="' + "file" + '";' + 'filename="' + "my_file.jpg" + '"',
    'Content-Type: ' + "image/jpeg",
    'Content-Transfer-Encoding: base64','', //need /r/n twice here
     //image.substring(23) //remove the data:image/jpeg;base64,
     image.replace(/^data:image\/[a-z]+;base64,/, ""),
    );  
    
    bodyString.push('--' + boundary + '--','');
  
    var content = bodyString.join('\r\n');
    return {
      content: content,
      headers: {
        'Content-Type': 'multipart/form-data; boundary='+boundary,
        'Content-Length': content.length
      }
    }
  }

  function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        //byteString = atob(dataURI.split(',')[1]);
        byteString = Buffer.from(dataURI.split(',')[1], 'binary').toString('base64');
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}

function dataURLtoFile(dataurl) {
 
  var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      //bstr = atob(arr[1]), 
      bstr = Buffer.from(arr[1], 'binary').toString('base64'),
      n = bstr.length, 
      u8arr = new Uint8Array(n);
      
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  
  return new File([u8arr], "filename", {type:mime});
}

export {dataURItoBlob}