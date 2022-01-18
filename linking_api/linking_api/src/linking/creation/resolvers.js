import request from 'request-promise-native';
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
			creatoken(creation),
		fecha: (_, { creation }) =>
			creatokenfe(creation),
	}
};

async function creatoken(creation){
	const parametrers ={
		method:'GET',
		uri: encodeURI('http://host.docker.internal:3000/auth/profile'),
		body:creation,
		json: true,
		headers:{'authtoken' :creation.token}
	};
	try{
		const creationn = await request(parametrers);
		const reunion_aux={
			id_llam: creation.id_llam,
    		email: creationn.email,
    		organization: creation.organization,
   			begin_Date: creation.begin_Date
		}
		const reunion={
			method:'POST',
			uri: encodeURI('http://host.docker.internal:2307/api/creation/normal'),
			body:reunion_aux,
			json:true
		}
		const newcreation = await request(reunion);
		return newcreation
	}
	catch(err){
		return null
	}
}

async function creatokenfe(creation){
	const parametrers ={
		method:'GET',
		uri: encodeURI('http://host.docker.internal:3000/auth/profile'),
		body:creation,
		json: true,
		headers:{'authtoken' :creation.token}
	};
	try{
		const creationn = await request(parametrers);
		console.log(creationn.email)
		const reunion_aux={
			id_llam: creation.id_llam,
    		email: creationn.email,
    		organization: creation.organization,
   			begin_Date: creation.begin_Date
		}
		const reunion={
			method:'POST',
			uri: encodeURI('http://host.docker.internal:2307/api/creation/fecha'),
			body:reunion_aux,
			json:true
		}
		const newcreation = await request(reunion);
		return newcreation
	}
	catch(err){
		return null
	}
}

export default resolvers;
