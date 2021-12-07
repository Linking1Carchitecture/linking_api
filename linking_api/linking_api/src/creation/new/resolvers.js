import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/api/creation/${entryPoint}`;

const resolvers = {
	Query: {
		allCategories: (_) =>
			getRequest(URL, ''),
		categoryById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		normal: (_, { category }) =>
			generalRequest(`${URL}/normal/`, 'POST', category),
		fecha: (_, { category }) =>
			generalRequest(`${URL}/fecha/`, 'POST', category),
	}
};

export default resolvers;
