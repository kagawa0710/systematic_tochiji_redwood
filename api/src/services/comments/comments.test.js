import {
  comments,
  comment,
  createComment,
  updateComment,
  deleteComment,
} from './comments'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('comments', () => {
  scenario('returns all comments', async (scenario) => {
    const result = await comments()

    expect(result.length).toEqual(Object.keys(scenario.comment).length)
  })

  scenario('returns a single comment', async (scenario) => {
    const result = await comment({ id: scenario.comment.one.id })

    expect(result).toEqual(scenario.comment.one)
  })

  scenario('creates a comment', async (scenario) => {
    const result = await createComment({
      input: {
        originId: 'String',
        line: 6352862,
        utterance: 'String',
        meetingId: scenario.comment.two.meetingId,
        speakerId: scenario.comment.two.speakerId,
      },
    })

    expect(result.originId).toEqual('String')
    expect(result.line).toEqual(6352862)
    expect(result.utterance).toEqual('String')
    expect(result.meetingId).toEqual(scenario.comment.two.meetingId)
    expect(result.speakerId).toEqual(scenario.comment.two.speakerId)
  })

  scenario('updates a comment', async (scenario) => {
    const original = await comment({ id: scenario.comment.one.id })
    const result = await updateComment({
      id: original.id,
      input: { originId: 'String2' },
    })

    expect(result.originId).toEqual('String2')
  })

  scenario('deletes a comment', async (scenario) => {
    const original = await deleteComment({
      id: scenario.comment.one.id,
    })
    const result = await comment({ id: original.id })

    expect(result).toEqual(null)
  })
})
