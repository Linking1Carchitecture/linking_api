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
	creationMutations,
	creationQueries,
	creationTypeDef
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

import { 
	boardMutations, 
	boardQueries, 
	boardTypeDef 
} from './linking/activities/boards/typeDefs';

import { 
	recordingMutations, 
	recordingQueries, 
	recordingTypeDef 
} from './linking/activities/recordings/typeDefs';

import categoryResolvers from './linking/auth/resolvers';
import categoryResolvers2 from './linking/creation/resolvers';
import categoryResolvers3 from './linking/backgrounds/resolvers';
import categoryResolvers4 from './linking/settings/resolvers';
import categoryResolvers5 from './linking/activities/boards/resolvers';
import categoryResolvers6 from './linking/activities/recordings/resolvers';



// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		creationTypeDef,
		authTypeDef,
		configTypeDef,
		backgroundsTypeDef,
		boardTypeDef,
    recordingTypeDef
	],
	[
		creationQueries,
		authQueries,
		configQueries,
		backgroundsQueries,
		boardQueries,
    recordingQueries
	],
	[
		creationMutations,
		authMutations,
		configMutations,
		backgroundsMutations,
		boardMutations,
    recordingMutations
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
		categoryResolvers4,
		categoryResolvers5,
		categoryResolvers6
	)
});
