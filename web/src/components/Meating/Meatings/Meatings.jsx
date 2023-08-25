import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Meating/MeatingsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_MEATING_MUTATION = gql`
  mutation DeleteMeatingMutation($id: Int!) {
    deleteMeating(id: $id) {
      id
    }
  }
`

const MeatingsList = ({ meatings }) => {
  const [deleteMeating] = useMutation(DELETE_MEATING_MUTATION, {
    onCompleted: () => {
      toast.success('Meating deleted')
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
    if (confirm('Are you sure you want to delete meating ' + id + '?')) {
      deleteMeating({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Prefecture</th>
            <th>Volume</th>
            <th>Line</th>
            <th>Number</th>
            <th>Year</th>
            <th>Month</th>
            <th>Day</th>
            <th>Datetime</th>
            <th>Title</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {meatings.map((meating) => (
            <tr key={meating.id}>
              <td>{truncate(meating.id)}</td>
              <td>{truncate(meating.prefecture)}</td>
              <td>{truncate(meating.volume)}</td>
              <td>{truncate(meating.line)}</td>
              <td>{truncate(meating.number)}</td>
              <td>{truncate(meating.year)}</td>
              <td>{truncate(meating.month)}</td>
              <td>{truncate(meating.day)}</td>
              <td>{truncate(meating.datetime)}</td>
              <td>{truncate(meating.title)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.meating({ id: meating.id })}
                    title={'Show meating ' + meating.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMeating({ id: meating.id })}
                    title={'Edit meating ' + meating.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete meating ' + meating.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(meating.id)}
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

export default MeatingsList
