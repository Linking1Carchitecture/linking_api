import { generalRequest, getRequest, requestToken } from '../../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allBoards: (_) =>
			getRequest(URL, ''),
		boardById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createBoard: (_, { board }) =>
      requestToken(board.token).then( response => 
	  		{
          if (response.status == "Active"){
            return generalRequest(`${URL}/`, 'POST', board);
          }else{
            throw new Error("Token inválido");
          }
        }),
    updateBoard: (_, { id, board }) =>
      requestToken(board.token).then( response => 
        {
          if (response.status == "Active"){
            return generalRequest(`${URL}/${id}`, 'PUT', board);
          }else{
            throw new Error("Token inválido");
          }
        }),
    deleteBoard: (_, { id, board }) =>
      requestToken(board.token).then( response => 
        {
          if (response.status == "Active"){
            return generalRequest(`${URL}/${id}`, 'DELETE', board);
          }else{
            throw new Error("Token inválido");
          }
        })
	}
};

export default resolvers;
