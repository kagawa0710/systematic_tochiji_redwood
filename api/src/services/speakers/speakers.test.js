import {
  speakers,
  speaker,
  createSpeaker,
  updateSpeaker,
  deleteSpeaker,
} from './speakers'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('speakers', () => {
  scenario('returns all speakers', async (scenario) => {
    const result = await speakers()

    expect(result.length).toEqual(Object.keys(scenario.speaker).length)
  })

  scenario('returns a single speaker', async (scenario) => {
    const result = await speaker({ id: scenario.speaker.one.id })

    expect(result).toEqual(scenario.speaker.one)
  })

  scenario('creates a speaker', async () => {
    const result = await createSpeaker({
      input: { name: 'String', url: 'String', description: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.url).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a speaker', async (scenario) => {
    const original = await speaker({ id: scenario.speaker.one.id })
    const result = await updateSpeaker({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a speaker', async (scenario) => {
    const original = await deleteSpeaker({
      id: scenario.speaker.one.id,
    })
    const result = await speaker({ id: original.id })

    expect(result).toEqual(null)
  })
})
