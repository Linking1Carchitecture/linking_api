export const creationTypeDef = `
  type Creation {
    Id_llam: String
    Email: String!
    Organization: String!
    Begin_Date: String!
  }
  input CreationInput {
    Id_llam: String!
    Email: String!
    Organization: String!
    Begin_Date: String!
  }`;

export const creationQueries = `
      allCreations: [Creation]!
      creationById(Id_llam: String!): Creation!
  `;

export const creationMutations = `
    normal(creation: CreationInput!): Creation
    fecha(creation: CreationInput!): Creation!
`;
