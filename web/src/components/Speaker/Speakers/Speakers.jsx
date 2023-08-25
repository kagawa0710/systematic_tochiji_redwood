import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Speaker/SpeakersCell'
import { truncate } from 'src/lib/formatters'

const DELETE_SPEAKER_MUTATION = gql`
  mutation DeleteSpeakerMutation($id: Int!) {
    deleteSpeaker(id: $id) {
      id
    }
  }
`

const SpeakersList = ({ speakers }) => {
  const [deleteSpeaker] = useMutation(DELETE_SPEAKER_MUTATION, {
    onCompleted: () => {
      toast.success('Speaker deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete speaker ' + id + '?')) {
      deleteSpeaker({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Url</th>
            <th>Description</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {speakers.map((speaker) => (
            <tr key={speaker.id}>
              <td>{truncate(speaker.id)}</td>
              <td>{truncate(speaker.name)}</td>
              <td>{truncate(speaker.url)}</td>
              <td>{truncate(speaker.description)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.speaker({ id: speaker.id })}
                    title={'Show speaker ' + speaker.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSpeaker({ id: speaker.id })}
                    title={'Edit speaker ' + speaker.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete speaker ' + speaker.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(speaker.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SpeakersList
