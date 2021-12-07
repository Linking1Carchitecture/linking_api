import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	
	Query: {
		allBackgrounds: (_) =>
			getRequest(URL, ''),
		backgroundById: (_, {background_id}) =>
			generalRequest(`${URL}/${background_id}`, 'GET'),
		userBackgrounds: (_, { user_id }) =>
			generalRequest(`${URL}/user?id=${user_id}`, 'GET'),
	},
	Mutation: {
		newBackground: (_, { user_id, image}) =>
			generalRequest(`${URL}/${user_id}/new`, 'POST', {"image":image}),		
		deleteBackground: (_, { background_id }) =>
			generalRequest(`${URL}/delete?background_id=${background_id}`, 'DELETE'),
		deleteUserBackgrounds: (_, { user_id }) =>
			generalRequest(`${URL}/delete/${user_id}`, 'DELETE'),

	}
};

export default resolvers;
