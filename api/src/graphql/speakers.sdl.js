export const schema = gql`
  type Speaker {
    id: Int!
    comment: [Comment]!
    name: String!
    url: String!
    description: String!
  }

  type Query {
    speakers: [Speaker!]! @requireAuth
    speaker(id: Int!): Speaker @requireAuth
    searchSpeakersName(searchName: String!): [Speaker!]! @requireAuth
    filterSentence(speakerName: String!, searchWord: String): [Speaker!]!
      @requireAuth
  }

  input CreateSpeakerInput {
    name: String!
    url: String!
    description: String!
  }

  input UpdateSpeakerInput {
    name: String
    url: String
    description: String
  }

  type Mutation {
    createSpeaker(input: CreateSpeakerInput!): Speaker! @requireAuth
    updateSpeaker(id: Int!, input: UpdateSpeakerInput!): Speaker! @requireAuth
    deleteSpeaker(id: Int!): Speaker! @requireAuth
  }
`
