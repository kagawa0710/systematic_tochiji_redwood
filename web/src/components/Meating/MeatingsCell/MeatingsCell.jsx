import { Link, routes } from '@redwoodjs/router'

import Meatings from 'src/components/Meating/Meatings'

export const QUERY = gql`
  query FindMeatings {
    meatings {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No meatings yet. '}
      <Link to={routes.newMeating()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ meatings }) => {
  return <Meatings meatings={meatings} />
}
