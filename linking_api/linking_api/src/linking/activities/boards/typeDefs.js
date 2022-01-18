export const boardTypeDef = `
  type Board {
    id: Int!
    meeting_id: String!
    image: String
    updated_at: String
    created_at: String
    token: String
  }
  input BoardInput {
    image: String!
    meeting_id: String!
    updated_at: String
    token: String!
  }`;

export const boardQueries = `
      allBoards: [Board]!
      boardById(id: Int!): Board!
  `;

export const boardMutations = `
    createBoard(board: BoardInput!): Board!
    updateBoard(id: Int!, board: BoardInput!): Board!
    deleteBoard(id: Int!): Int
`;

