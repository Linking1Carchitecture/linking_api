import { generalRequest, getRequest, requestToken } from '../../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allRecordings: (_) =>
			getRequest(URL, ''),
		recordingById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createRecording: (_, { recording }) =>
      requestToken(recording.token).then( response => 
	  		{
          if (response.status == "Active"){
            return generalRequest(`${URL}/`, 'POST', recording);
          }else{
            throw new Error("Token inválido");
          }
        }),
    updateRecording: (_, { id, recording }) =>
      requestToken(recording.token).then( response => 
        {
          if (response.status == "Active"){
            return generalRequest(`${URL}/${id}`, 'PUT', recording);
          }else{
            throw new Error("Token inválido");
          }
        }),
    deleteRecording: (_, { id, recording }) =>
      requestToken(recording.token).then( response => 
        {
          if (response.status == "Active"){
            return generalRequest(`${URL}/${id}`, 'DELETE', recording);
          }else{
            throw new Error("Token inválido");
          }
        })
	}
};

export default resolvers;
