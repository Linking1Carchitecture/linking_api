export const configTypeDef = `
  type Configuration {
      config_id: Int!
      user_id: Int!      
      subtitles: Boolean!
      background_id: Int
      in_device: String!
      out_device: String!
  }
  input newConfig {
      user_id: Int!      
      subtitles: Boolean!
      in_device: String!
      out_device: String!
  }
  input updateConfig {
    config_id: Int!      
    subtitles: Boolean!
    in_device: String!
    out_device: String!
  }
`;

export const configQueries = `
      allConfig: [Configuration]!
      userConfig(user_id: Int!): Configuration!
  `;

export const configMutations = `
    createConfig(configuration: newConfig!): Configuration!
    updateConfig(configuration: updateConfig!): String!
    updateUserBackground(user_id: Int!, background_id: Int): String!
    deleteConfig(config_id: Int!): String!
`;
