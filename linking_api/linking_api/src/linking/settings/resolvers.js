import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allConfig: (_) =>
			getRequest(URL, ''),
		userConfig: (_, { user_email }) =>
			generalRequest(`${URL}/${user_email}`, 'GET'),
	},
	Mutation: {
		createConfig: (_, { configuration }) =>
			generalRequest(`${URL}/new`, 'POST', configuration),
		updateConfig: (_, { configuration }) =>
			generalRequest(`${URL}/update`, 'PUT', configuration),
		updateUserBackground: (_, { user_email, background_id }) =>
			generalRequest(`${URL}/${user_email}/changeBackground?background_id=${background_id}`, 'PUT'),
		deleteConfig: (_, { config_id }) =>
			generalRequest(`${URL}/delete?config_id=${config_id}`, 'DELETE')
	}
};

export default resolvers;