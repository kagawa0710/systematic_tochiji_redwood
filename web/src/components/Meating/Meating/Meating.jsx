import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_MEATING_MUTATION = gql`
  mutation DeleteMeatingMutation($id: Int!) {
    deleteMeating(id: $id) {
      id
    }
  }
`

const Meating = ({ meating }) => {
  const [deleteMeating] = useMutation(DELETE_MEATING_MUTATION, {
    onCompleted: () => {
      toast.success('Meating deleted')
      navigate(routes.meatings())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete meating ' + id + '?')) {
      deleteMeating({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Meating {meating.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{meating.id}</td>
            </tr>
            <tr>
              <th>Prefecture</th>
              <td>{meating.prefecture}</td>
            </tr>
            <tr>
              <th>Volume</th>
              <td>{meating.volume}</td>
            </tr>
            <tr>
              <th>Line</th>
              <td>{meating.line}</td>
            </tr>
            <tr>
              <th>Number</th>
              <td>{meating.number}</td>
            </tr>
            <tr>
              <th>Year</th>
              <td>{meating.year}</td>
            </tr>
            <tr>
              <th>Month</th>
              <td>{meating.month}</td>
            </tr>
            <tr>
              <th>Day</th>
              <td>{meating.day}</td>
            </tr>
            <tr>
              <th>Datetime</th>
              <td>{meating.datetime}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{meating.title}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMeating({ id: meating.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(meating.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Meating
