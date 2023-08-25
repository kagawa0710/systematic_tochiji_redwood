import {
  meatings,
  meating,
  createMeating,
  updateMeating,
  deleteMeating,
} from './meatings'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('meatings', () => {
  scenario('returns all meatings', async (scenario) => {
    const result = await meatings()

    expect(result.length).toEqual(Object.keys(scenario.meating).length)
  })

  scenario('returns a single meating', async (scenario) => {
    const result = await meating({ id: scenario.meating.one.id })

    expect(result).toEqual(scenario.meating.one)
  })

  scenario('creates a meating', async () => {
    const result = await createMeating({
      input: {
        prefecture: 'String',
        volume: 'String',
        line: 2048278,
        number: 'String',
        year: 9140118,
        month: 9064925,
        day: 750711,
        datetime: 'String',
        title: 'String',
      },
    })

    expect(result.prefecture).toEqual('String')
    expect(result.volume).toEqual('String')
    expect(result.line).toEqual(2048278)
    expect(result.number).toEqual('String')
    expect(result.year).toEqual(9140118)
    expect(result.month).toEqual(9064925)
    expect(result.day).toEqual(750711)
    expect(result.datetime).toEqual('String')
    expect(result.title).toEqual('String')
  })

  scenario('updates a meating', async (scenario) => {
    const original = await meating({ id: scenario.meating.one.id })
    const result = await updateMeating({
      id: original.id,
      input: { prefecture: 'String2' },
    })

    expect(result.prefecture).toEqual('String2')
  })

  scenario('deletes a meating', async (scenario) => {
    const original = await deleteMeating({
      id: scenario.meating.one.id,
    })
    const result = await meating({ id: original.id })

    expect(result).toEqual(null)
  })
})
