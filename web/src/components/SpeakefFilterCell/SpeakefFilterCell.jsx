export const QUERY = gql`
  query FindSpeakefFilterQuery($searchName: String!) {
    speakefFilter: searchSpeakersName(searchName: $searchName) {
      id
      name
      url
      description
      comment {
        id
        utterance
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ speakefFilter }) => {
  return (
    <>
      <div>cell</div>
      <div>{JSON.stringify(speakefFilter)}</div>
    </>
  )
}
