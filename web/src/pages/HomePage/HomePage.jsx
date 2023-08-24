import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import MeetingCell from 'src/components/MeetingCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>システマテック基</h1>
      <p>とりあえずページ作成</p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <MeetingCell id={10} />
    </>
  )
}

export default HomePage
