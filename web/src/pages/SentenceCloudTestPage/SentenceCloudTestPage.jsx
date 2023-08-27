import React, { useEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5wc from "@amcharts/amcharts5/wc";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const AmChartComponent = () => {
  useEffect(() => {
    let root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);

    let series = root.container.children.push(am5wc.WordCloud.new(root, {
      maxCount: 100,
      minWordLength: 1,
      minFontSize: 50,
      maxFontSize: 75,
      angles: [0]
    }));

    let colorSet = am5.ColorSet.new(root, { step: 1 });

    series.labels.template.setAll({
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 5,
      paddingRight: 5,
      fontFamily: "Courier New"
    });

    series.labels.template.setup = function(label) {
      label.set("background", am5.RoundedRectangle.new(root, { fillOpacity: 1, fill: colorSet.next() }))
    };

    var text = ["エネルギー政策を都市政策の柱に据え、東京発の環境エネルギー戦略を展開し、国に提起してまいります。",
    "正確無比な公共交通システム、多彩な食文化、\n世界自然遺産登録目前の小笠原を初めとする豊かな自然といった東京ならではの魅力もさらに高めるなど、\n都市政策や産業政策、交通政策等を重層的に展開し、アジアのヘッドクオーターへと東京を進化させてまいります。",
    "年末には「十年後の東京」計画を改定して「二〇二〇年の東京」を策定し、\n東京を一段と高い次元で成熟させる新たな政策を構築してまいります。",
    "年末には「十年後の東京」計画を改定して「二〇二〇年の東京」を策定し、\n東京を一段と高い次元で成熟させる新たな政策を構築してまいります。",
    "選挙期間中、公務を盾に政策討論を行わず、\n一部不適切な発言があったことは遺憾であるといわなければなりません。",
    "さらに、エネルギー政策を柱に据えまして、\n節電意識の徹底を図ることなどによりまして、生活様式や価値観を転換し、\n環境と経済が高次元で両立した都市を実現していく考えでございます。",
    "防災対策を政策の大きな柱に据えるのはよいのですが、都がどういう都市であるかだけではなく、\n都民の生活がどうあるかも大切な視点になります。",
    "事業の公共性の点から、政策判断により非課税措置や減免を行うことはあってしかるべきだという考えがある一方、\n地方税法上、固定資産税の減免は、貧困など納税者の税負担能力がない等の理由として行われるものに限られるのではないかという考え方もあります。",
    "我が党も、身命を賭して都政運営に当たると述べられた知事の政策遂行を全力で支えてまいります"
  ]
  var separatedText = text.map(sentence => {
    return [...sentence].join('\n');
});

    series.data.setAll([
      { category: separatedText[0], value: 2.0 },
      { category: separatedText[1], value: 2.0 },
      { category: separatedText[2], value: 2.0 },
      { category: separatedText[3], value: 2.0 },
      { category: separatedText[4], value: 2.0 },
      { category: separatedText[5], value: 2.0 },
      { category: separatedText[6], value: 2.0 },
      { category: separatedText[7], value: 2.0 },
      { category: separatedText[8], value: 2.0 }

    ]);

    return () => {
      root.dispose(); // コンポーネントのアンマウント時にチャートを破棄
    };
  }, []);

  return <div id="chartdiv" style={{ width: '100%', height: '500px' }}></div>;
}

export default AmChartComponent;
