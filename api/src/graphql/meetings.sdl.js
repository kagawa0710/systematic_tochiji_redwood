export const schema = gql`
  type Meeting {
    id: Int!
    prefecture: String!
    volume: String!
    number: String!
    year: Int!
    month: Int!
    day: Int!
    datetime: String!
    title: String!
    comment: [Comment]!
  }

  type Query {
    meetings: [Meeting!]! @requireAuth
    meeting(id: Int!): Meeting @requireAuth
  }

  input CreateMeetingInput {
    prefecture: String!
    volume: String!
    number: String!
    year: Int!
    month: Int!
    day: Int!
    datetime: String!
    title: String!
  }

  input UpdateMeetingInput {
    prefecture: String
    volume: String
    number: String
    year: Int
    month: Int
    day: Int
    datetime: String
    title: String
  }

  type Mutation {
    createMeeting(input: CreateMeetingInput!): Meeting! @requireAuth
    updateMeeting(id: Int!, input: UpdateMeetingInput!): Meeting! @requireAuth
    deleteMeeting(id: Int!): Meeting! @requireAuth
  }
`
