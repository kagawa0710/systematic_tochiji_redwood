import { render } from '@redwoodjs/testing/web'

import WordCloudTestPage from './WordCloudTestPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WordCloudTestPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WordCloudTestPage />)
    }).not.toThrow()
  })
})
