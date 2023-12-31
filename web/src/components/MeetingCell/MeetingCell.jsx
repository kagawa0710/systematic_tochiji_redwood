export const QUERY = gql`
  query FindMeetingQuery($id: Int!) {
    meeting: meating(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ meeting }) => {
  return <div>{JSON.stringify(meeting)}</div>
}
