export const backgroundsTypeDef = `  
  type Background {
      background_id: Int!
      user_id: Int!
      imageLocation: String!
  }
  input BackgroundInput {
      user_id: Int!
  }`;

export const backgroundsQueries = `
      allBackgrounds: [Background]!
      backgroundById(background_id: Int!): String
      userBackgrounds(user_id: Int!): [String]!
  `;

export const backgroundsMutations = `
    newBackground(user_id: Int!, image: String!): String
    deleteBackground(background_id: Int!): String
    deleteUserBackgrounds(user_id: Int!): String
`;
