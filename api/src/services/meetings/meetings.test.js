import {
  meetings,
  meeting,
  createMeeting,
  updateMeeting,
  deleteMeeting,
} from './meetings'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('meetings', () => {
  scenario('returns all meetings', async (scenario) => {
    const result = await meetings()

    expect(result.length).toEqual(Object.keys(scenario.meeting).length)
  })

  scenario('returns a single meeting', async (scenario) => {
    const result = await meeting({ id: scenario.meeting.one.id })

    expect(result).toEqual(scenario.meeting.one)
  })

  scenario('creates a meeting', async () => {
    const result = await createMeeting({
      input: {
        prefecture: 'String',
        volume: 'String',
        number: 'String',
        year: 600599,
        month: 6775260,
        day: 9901128,
        datetime: 'String',
        title: 'String',
      },
    })

    expect(result.prefecture).toEqual('String')
    expect(result.volume).toEqual('String')
    expect(result.number).toEqual('String')
    expect(result.year).toEqual(600599)
    expect(result.month).toEqual(6775260)
    expect(result.day).toEqual(9901128)
    expect(result.datetime).toEqual('String')
    expect(result.title).toEqual('String')
  })

  scenario('updates a meeting', async (scenario) => {
    const original = await meeting({ id: scenario.meeting.one.id })
    const result = await updateMeeting({
      id: original.id,
      input: { prefecture: 'String2' },
    })

    expect(result.prefecture).toEqual('String2')
  })

  scenario('deletes a meeting', async (scenario) => {
    const original = await deleteMeeting({
      id: scenario.meeting.one.id,
    })
    const result = await meeting({ id: original.id })

    expect(result).toEqual(null)
  })
})
