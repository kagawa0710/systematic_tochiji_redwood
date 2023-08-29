import { render } from '@redwoodjs/testing/web'

import SpeakefFilterPage from './SpeakefFilterPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SpeakefFilterPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SpeakefFilterPage />)
    }).not.toThrow()
  })
})
