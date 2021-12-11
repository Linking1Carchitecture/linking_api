import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}`;

const resolvers = {
	Query: {
		allCreations: (_) =>
			getRequest(URL, ''),
		creationById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		normal: (_, { creation }) =>
			generalRequest(`${URL}/api/creation/normal`, 'POST', creation),
		fecha: (_, { creation }) =>
			generalRequest(`${URL}/api/creation/fecha`, 'POST', creation),
	}
};

export default resolvers;
