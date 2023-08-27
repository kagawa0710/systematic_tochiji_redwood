import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import SpeakefFilterCell from 'src/components/SpeakefFilterCell'
const SpeakefFilterPage = () => {
  return (
    <>
      <MetaTags title="SpeakefFilter" description="SpeakefFilter page" />

      <h1>SpeakefFilterPage</h1>
      <SpeakefFilterCell searchName={'白石'} />
    </>
  )
}

export default SpeakefFilterPage
