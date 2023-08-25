import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MeatingForm from 'src/components/Meating/MeatingForm'

const CREATE_MEATING_MUTATION = gql`
  mutation CreateMeatingMutation($input: CreateMeatingInput!) {
    createMeating(input: $input) {
      id
    }
  }
`

const NewMeating = () => {
  const [createMeating, { loading, error }] = useMutation(
    CREATE_MEATING_MUTATION,
    {
      onCompleted: () => {
        toast.success('Meating created')
        navigate(routes.meatings())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createMeating({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Meating</h2>
      </header>
      <div className="rw-segment-main">
        <MeatingForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMeating
