import { render } from '@redwoodjs/testing/web'

import SentenceCloudPage from './SentenceCloudPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SentenceCloudPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SentenceCloudPage />)
    }).not.toThrow()
  })
})
