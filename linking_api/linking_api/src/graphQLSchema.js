import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	authMutations,
	authQueries,
	authTypeDef
} from './linking/auth/typeDefs';

import {
	categoryMutations,
	categoryQueries,
	categoryTypeDef
} from './linking/creation/typeDefs';

import { 
	configMutations, 
	configQueries, 
	configTypeDef 
} from './linking/settings/typeDefs';

import { 
	backgroundsMutations, 
	backgroundsQueries, 
	backgroundsTypeDef 
} from './linking/backgrounds/typeDefs';

import categoryResolvers from './linking/auth/resolvers';
import categoryResolvers2 from './linking/creation/resolvers';
import categoryResolvers3 from './linking/backgrounds/resolvers';
import categoryResolvers4 from './linking/settings/resolvers';



// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		categoryTypeDef,
		authTypeDef,
		configTypeDef,
		backgroundsTypeDef
	],
	[
		categoryQueries,
		authQueries,
		configQueries,
		backgroundsQueries
	],
	[
		categoryMutations,
		authMutations,
		configMutations,
		backgroundsMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		categoryResolvers,
		categoryResolvers2,
		categoryResolvers3,
		categoryResolvers4
	)
});
