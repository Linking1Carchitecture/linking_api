import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allReports: (_) =>
			getRequest(URL, ''),
		reportById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createReport: (_, { report }) =>
			generalRequest(`${URL}/`, 'POST', report),
		updateReport: (_, { id, report }) =>
			generalRequest(`${URL}/${id}`, 'PUT', report),
		deleteBoard: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;