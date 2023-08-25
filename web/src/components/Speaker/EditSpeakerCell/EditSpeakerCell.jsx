import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SpeakerForm from 'src/components/Speaker/SpeakerForm'

export const QUERY = gql`
  query EditSpeakerById($id: Int!) {
    speaker: speaker(id: $id) {
      id
      name
      url
      description
    }
  }
`
const UPDATE_SPEAKER_MUTATION = gql`
  mutation UpdateSpeakerMutation($id: Int!, $input: UpdateSpeakerInput!) {
    updateSpeaker(id: $id, input: $input) {
      id
      name
      url
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ speaker }) => {
  const [updateSpeaker, { loading, error }] = useMutation(
    UPDATE_SPEAKER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Speaker updated')
        navigate(routes.speakers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateSpeaker({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Speaker {speaker?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SpeakerForm
          speaker={speaker}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
