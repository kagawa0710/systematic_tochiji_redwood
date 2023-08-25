import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SpeakerForm from 'src/components/Speaker/SpeakerForm'

const CREATE_SPEAKER_MUTATION = gql`
  mutation CreateSpeakerMutation($input: CreateSpeakerInput!) {
    createSpeaker(input: $input) {
      id
    }
  }
`

const NewSpeaker = () => {
  const [createSpeaker, { loading, error }] = useMutation(
    CREATE_SPEAKER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Speaker created')
        navigate(routes.speakers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createSpeaker({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Speaker</h2>
      </header>
      <div className="rw-segment-main">
        <SpeakerForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSpeaker
