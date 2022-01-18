export const recordingTypeDef = `
  type Recording {
    id: Int!
    meeting_id: String!
    started_at: String
    finished_at: String
    created_at: String!
    token: String
  }
  input RecordingInput {
    meeting_id: String!
    started_at: String!
    finished_at: String!
    token: String!
  }`;

export const recordingQueries = `
      allRecordings: [Recording]!
      recordingById(id: Int!): Recording!
  `;

export const recordingMutations = `
    createRecording(recording: RecordingInput!): Recording!
    updateRecording(id: Int!, recording: RecordingInput!): Recording!
    deleteRecording(id: Int!): Int
`;
