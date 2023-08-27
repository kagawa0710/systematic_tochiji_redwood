export const QUERY = gql`
  query FindFilterCommentQuery($searchWord: String!, $speakerName: String!) {
    # filterComment: filterComment(id: $id) {
    #   id
    # }
    filterComment: filterComment(
      searchWord: $searchWord
      speakerName: $speakerName
    ) {
      id
      utterance
      speaker {
        id
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ filterComment }) => {
  return <div>{JSON.stringify(filterComment)}</div>
}
