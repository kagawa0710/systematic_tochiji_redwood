import { render } from '@redwoodjs/testing/web'

import SentenceCloudTestPage from './SentenceCloudTestPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SentenceCloudTestPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SentenceCloudTestPage />)
    }).not.toThrow()
  })
})
