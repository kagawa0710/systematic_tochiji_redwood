import Meating from 'src/components/Meating/Meating'

export const QUERY = gql`
  query FindMeatingById($id: Int!) {
    meating: meating(id: $id) {
      id
      prefecture
      volume
      line
      number
      year
      month
      day
      datetime
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Meating not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ meating }) => {
  return <Meating meating={meating} />
}
