import React, { useEffect } from 'react'

import * as am5 from '@amcharts/amcharts5'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import * as am5wc from '@amcharts/amcharts5/wc'

export const QUERY = gql`
  query FindFilterCommentQuery($searchWord: String!, $speakerName: String!) {
    # filterComment: filterComment(id: $id) {
    #   id
    # }
    filterComment: filterComment(
      searchWord: $searchWord
      speakerName: $speakerName
    ) {
      id
      utterance
      speaker {
        id
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ filterComment }) => {
  useEffect(() => {
    let root = am5.Root.new('chartdiv')
    root.setThemes([am5themes_Animated.new(root)])

    let series = root.container.children.push(
      am5wc.WordCloud.new(root, {
        maxCount: 100,
        minWordLength: 2,
        minFontSize: am5.percent(6),
        maxFontSize: am5.percent(8),
        angles: [0],
      })
    )

    let colorSet = am5.ColorSet.new(root, { step: 1 })

    series.labels.template.setAll({
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 5,
      paddingRight: 5,
      fontFamily: 'Courier New',
    })

    series.labels.template.setup = function (label) {
      label.set(
        'background',
        am5.RoundedRectangle.new(root, {
          fillOpacity: 1,
          fill: colorSet.next(),
        })
      )
    }

    // filterComment
    let arr = []

    filterComment.forEach((element) =>
      arr.push({
        category: element.utterance,
        value: 2.0,
      })
    )
    console.log(arr)

    series.data.setAll([
      {
        category:
          'エネルギー政策を都市政策の柱に据え、東京発の環境エネルギー戦略を展開し、国に提起してまいります。',
        value: 2.0,
      },
      {
        category:
          '正確無比な公共交通システム、多彩な食文化、\n世界自然遺産登録目前の小笠原を初めとする豊かな自然といった東京ならではの魅力もさらに高めるなど、\n都市政策や産業政策、交通政策等を重層的に展開し、アジアのヘッドクオーターへと東京を進化させてまいります。',
        value: 2.0,
      },
      {
        category:
          '年末には「十年後の東京」計画を改定して「二〇二〇年の東京」を策定し、\n東京を一段と高い次元で成熟させる新たな政策を構築してまいります。',
        value: 2.0,
      },
      {
        category:
          '選挙期間中、公務を盾に政策討論を行わず、\n一部不適切な発言があったことは遺憾であるといわなければなりません。',
        value: 2.0,
      },
      {
        category:
          'さらに、エネルギー政策を柱に据えまして、\n節電意識の徹底を図ることなどによりまして、生活様式や価値観を転換し、\n環境と経済が高次元で両立した都市を実現していく考えでございます。',
        value: 2.0,
      },
      {
        category:
          '防災対策を政策の大きな柱に据えるのはよいのですが、都がどういう都市であるかだけではなく、\n都民の生活がどうあるかも大切な視点になります。',
        value: 2.0,
      },
      {
        category:
          '事業の公共性の点から、政策判断により非課税措置や減免を行うことはあってしかるべきだという考えがある一方、\n地方税法上、固定資産税の減免は、貧困など納税者の税負担能力がない等の理由として行われるものに限られるのではないかという考え方もあります。',
        value: 2.0,
      },
      {
        category:
          '我が党も、身命を賭して都政運営に当たると述べられた知事の政策遂行を全力で支えてまいります',
        value: 1.0,
      },
    ])

    return () => {
      root.dispose() // コンポーネントのアンマウント時にチャートを破棄
    }
  }, [])

  return (
    <>
      <div id="chartdiv" />
    </>
  )
}
