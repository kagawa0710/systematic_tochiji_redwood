export const schema = gql`
  type Comment {
    id: Int!
    originId: String!
    line: Int!
    utterance: String!
    meeting: Meeting!
    meetingId: Int!
    speaker: Speaker!
    speakerId: Int!
  }

  type Query {
    comments: [Comment!]! @requireAuth
    comment(id: Int!): Comment @requireAuth
    searchComment(searchWord: String!): [Comment!]! @requireAuth
    filterComment(searchWord: String!, speakerName: String!): [Comment!]!
      @requireAuth
  }

  input CreateCommentInput {
    originId: String!
    line: Int!
    utterance: String!
    meetingId: Int!
    speakerId: Int!
  }

  input UpdateCommentInput {
    originId: String
    line: Int
    utterance: String
    meetingId: Int
    speakerId: Int
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @requireAuth
    updateComment(id: Int!, input: UpdateCommentInput!): Comment! @requireAuth
    deleteComment(id: Int!): Comment! @requireAuth
  }
`
