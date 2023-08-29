import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const WordCloudTestPage = () => {
  return (
    <>
      <MetaTags title="WordCloudTest" description="WordCloudTest page" />

      <h1>WordCloudTestPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/WordCloudTestPage/WordCloudTestPage.jsx</code>
      </p>
      <p>
        My default route is named <code>wordCloudTest</code>, link to me with `
        <Link to={routes.wordCloudTest()}>WordCloudTest</Link>`
      </p>
    </>
  )
}

export default WordCloudTestPage
