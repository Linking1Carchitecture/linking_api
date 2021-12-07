export const reportTypeDef = `
  type Report {
      Description:String!
      User_r:String!
      Img_r:String!
      Typer:Int!
      Offender:String!
  }
  input ReportInput {
      Description:String!
      User_r:String!
      Img_r:String!
      Typer:Int!
      Offender:String!
  }`;

export const reportQueries = `
      allReports: [Report]!
      reportById(id: Int!): Report!
  `;

export const categoryMutations = 
    createReport(report: ReportInput!): Report!
    updateBoard(id: Int!, report: ReportInput!): Report!
    deleteBoard(id: Int!): Int`
`;