import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		profile:(_, { token })=>
			generalRequest(`${URL}/profile`, 'GET',token,{'authtoken' : token.token}),
		uservalidation:(_, { token })=>
		generalRequest(`${URL}/confirm/${token.token}`, 'GET'),
		image:(_, { image })=>
		generalRequest(`${URL}/image/`, 'GET',image),
	},
	Mutation: {
		signup:(_, { user }) =>
			generalRequest(`${URL}/signup`, 'POST', user),
		signin:(_, { user }) =>
			generalRequest(`${URL}/signin`, 'POST', user),
		profile:(_, { user }) =>
			generalRequest(`${URL}/profile`, 'PUT', user,{'authtoken' : user.token}),
		validateuser:(_, { code }) =>
		generalRequest(`${URL}/confirm/${code.code}`, 'GET'),
	}
};

export default resolvers;
