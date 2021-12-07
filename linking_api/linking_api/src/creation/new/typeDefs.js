export const categoryTypeDef = `
  type Category {
      Id_llam: String!
      Email: String!
      Organization: String!
      Begin_Date: String!
  }
  input CategoryInput {
    Id_llam: String!
    Email: String!
    Organization: String!
    Begin_Date: String!
  }`;

export const categoryQueries = `
      allCategories: [Category]!
      categoryById(Id_llam: String!): Category!
  `;

export const categoryMutations = `
    normal(category: CategoryInput!): Category!
    fecha(category: CategoryInput!): Category!
`;
