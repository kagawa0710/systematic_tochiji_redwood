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
        <Link to={routes.speakers()}>発言者一覧ページ</Link>
      </p>
      <MeetingCell id={10} />
    </>
  )
}

export default HomePage
