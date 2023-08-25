import Speaker from 'src/components/Speaker/Speaker'

export const QUERY = gql`
  query FindSpeakerById($id: Int!) {
    speaker: speaker(id: $id) {
      id
      name
      url
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Speaker not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ speaker }) => {
  return <Speaker speaker={speaker} />
}
