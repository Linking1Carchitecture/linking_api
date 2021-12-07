import { generalRequest, getRequest } from '../../utilities';
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
			generalRequest(`${URL}/`, 'POST', board),
		updateBoard: (_, { id, board }) =>
			generalRequest(`${URL}/${id}`, 'PUT', board),
		deleteBoard: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
