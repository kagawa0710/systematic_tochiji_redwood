export const schema = gql`
  type Meating {
    id: Int!
    prefecture: String!
    volume: String!
    line: Int!
    number: String!
    year: Int!
    month: Int!
    day: Int!
    datetime: String!
    title: String!
    comment: [Comment]!
  }

  type Query {
    meatings: [Meating!]! @requireAuth
    meating(id: Int!): Meating @requireAuth
  }

  input CreateMeatingInput {
    prefecture: String!
    volume: String!
    line: Int!
    number: String!
    year: Int!
    month: Int!
    day: Int!
    datetime: String!
    title: String!
  }

  input UpdateMeatingInput {
    prefecture: String
    volume: String
    line: Int
    number: String
    year: Int
    month: Int
    day: Int
    datetime: String
    title: String
  }

  type Mutation {
    createMeating(input: CreateMeatingInput!): Meating! @requireAuth
    updateMeating(id: Int!, input: UpdateMeatingInput!): Meating! @requireAuth
    deleteMeating(id: Int!): Meating! @requireAuth
  }
`
