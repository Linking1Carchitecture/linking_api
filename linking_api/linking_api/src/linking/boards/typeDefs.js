export const boardTypeDef = `
  type Board {
    id: Int!
    user_id: Int!
    meeting_id: Int
    image: String
    updated_at: String
    created_at: String!
  }
  input BoardInput {
    user_id: Int!
    meeting_id: Int!
    updated_at: String
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

