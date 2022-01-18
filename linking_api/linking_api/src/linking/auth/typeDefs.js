export const authTypeDef = `
  type User {
    username: String!
    email:  String!
    password: String!
    image: String
    status: String
  }
  type token {
    authtoken: String!
  }
  type Image {
    image: String!
  }
  input UserInput {
     username: String!
     email:  String!
     password: String!
  }
  input LoginInput {
    email:  String!
    password:String!
  }
  input Usertoken {
    token: String!
  }
  input UserupdInput {
  username: String
  password: String
  image: String
  token: String!
  }
  input Imageinput {
    image: String!
  }
  `;

export const authQueries = `
      profile(token:Usertoken!):User!
      uservalidation(token:Usertoken!):User!
      image(image:Imageinput!):Image!
  `;

export const authMutations = `
    signup(user: UserInput!): User!
    signin(user: LoginInput!): token!
    profile(user:UserupdInput): User!
`;
