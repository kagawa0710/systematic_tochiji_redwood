import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MeatingForm from 'src/components/Meating/MeatingForm'

export const QUERY = gql`
  query EditMeatingById($id: Int!) {
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
const UPDATE_MEATING_MUTATION = gql`
  mutation UpdateMeatingMutation($id: Int!, $input: UpdateMeatingInput!) {
    updateMeating(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ meating }) => {
  const [updateMeating, { loading, error }] = useMutation(
    UPDATE_MEATING_MUTATION,
    {
      onCompleted: () => {
        toast.success('Meating updated')
        navigate(routes.meatings())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateMeating({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Meating {meating?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MeatingForm
          meating={meating}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
