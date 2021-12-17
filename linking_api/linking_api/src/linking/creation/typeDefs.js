export const creationTypeDef = `
  type Creation {
    id_llam: String
    email: String!
    organization: String!
    begin_Date: String!
  }
  input CreationInput {
    id_llam: String!
    email: String!
    organization: String!
    begin_Date: String!
  }`;

export const creationQueries = `
      allCreations: [Creation]!
      creationById(id_llam: String!): Creation!
  `;

export const creationMutations = `
    normal(creation: CreationInput!): Creation
    fecha(creation: CreationInput!): Creation!
`;
