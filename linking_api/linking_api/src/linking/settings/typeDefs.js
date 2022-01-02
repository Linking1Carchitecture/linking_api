export const configTypeDef = `
  type Configuration {
      config_id: Int!
      user_email: String!      
      subtitles: Boolean!
      background_id: Int
      in_device: String
      out_device: String
  }
  input newConfig {
      user_email: String!      
      subtitles: Boolean!
      in_device: String
      out_device: String
  }
  input updateConfig {
    config_id: Int!      
    subtitles: Boolean!
    in_device: String
    out_device: String
  }
`;

export const configQueries = `
      allConfig: [Configuration]!
      userConfig(user_email: String!): Configuration!
  `;

export const configMutations = `
    createConfig(configuration: newConfig!): Configuration!
    updateConfig(configuration: updateConfig!): String!
    updateUserBackground(user_email: String!, background_id: Int): String!
    deleteConfig(config_id: Int!): String!
`;
