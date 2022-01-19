export const configTypeDef = `
  type Configuration {
      config_id: Int!
      user_email: String!      
      background_id: Int
      in_audio: String
      out_audio: String
      in_video: String
  }
  input newConfig {
      user_email: String!      
      in_audio: String
      out_audio: String
      in_video: String
  }
  input updateConfig {
    config_id: Int!      
    in_audio: String
    out_audio: String
    in_video: String
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