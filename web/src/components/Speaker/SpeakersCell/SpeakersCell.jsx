import { Link, routes } from '@redwoodjs/router'

import Speakers from 'src/components/Speaker/Speakers'

export const QUERY = gql`
  query FindSpeakers {
    speakers {
      id
      name
      url
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No speakers yet. '}
      <Link to={routes.newSpeaker()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ speakers }) => {
  return <Speakers speakers={speakers} />
}
