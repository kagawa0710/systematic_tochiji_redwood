import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_SPEAKER_MUTATION = gql`
  mutation DeleteSpeakerMutation($id: Int!) {
    deleteSpeaker(id: $id) {
      id
    }
  }
`

const Speaker = ({ speaker }) => {
  const [deleteSpeaker] = useMutation(DELETE_SPEAKER_MUTATION, {
    onCompleted: () => {
      toast.success('Speaker deleted')
      navigate(routes.speakers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete speaker ' + id + '?')) {
      deleteSpeaker({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Speaker {speaker.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{speaker.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{speaker.name}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{speaker.url}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{speaker.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSpeaker({ id: speaker.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(speaker.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Speaker
