const exhibitionList = [
  {
    _id: 29,
    filed: { en: "Sep. 2019", jp: "2019 / 9" },
    content: {
      en: "Korea Seoul ／ MMCA - Gathering",
      jp: "韓国 ／ 韓国国立現代美術館主催「Gathering」"
    }
  },
  {
    _id: 28,
    filed: { en: "Sep. 2019", jp: "2019 / 9" },
    content: {
      en: "Spain ／ Getxophoto Festival",
      jp: "スペイン ／ Getxophoto Festival"
    }
  },
  {
    _id: 27,
    filed: { en: "Sep. 2018", jp: "2018 / 9" },
    content: {
      en: "Netherlands ／ BredaPhoto Festival",
      jp: "オランダ ／ BredaPhoto Festival"
    }
  },
  {
    _id: 26,
    filed: { en: "Apr. 2018", jp: "2018 / 4" },
    content: {
      en: "Ukraine Zhytomyr Polytechnic State University",
      jp: "ウクライナ ／ ジトミール工科大学"
    }
  },
  {
    _id: 25,
    filed: { en: "Apr. 2018", jp: "2018 / 4" },
    content: {
      en: "Hiroshima city",
      jp: "広島県広島市 旧日銀広島支店"
    }
  },
  {
    _id: 24,
    filed: { en: "Dec. 2017", jp: "2017 / 12" },
    content: {
      en: "China ／ Lianzhou Foto Festival",
      jp: "中国 ／ 連州国際写真祭"
    }
  },
  {
    _id: 23,
    filed: { en: "Sep. 2017", jp: "2017 / 9" },
    content: {
      en: "Austria ／ Ars Electronica",
      jp: "オーストリア ／ Ars Electronica"
    }
  },
  {
    _id: 22,
    filed: { en: "Mar. 2017", jp: "2017 / 3" },
    content: {
      en: "England ／ FORMAT Photography Festival",
      jp: "England ／ FORMAT Photography Festival"
    }
  },
  {
    _id: 21,
    filed: { en: "Mar. 2017", jp: "2017 / 3" },
    content: {
      en: "Tokyo ／ Symposium in Hosei university",
      jp: "法政大学 ／ 日本野鳥の会主催 シンポジウム"
    }
  },
  {
    _id: 20,
    filed: { en: "Oct. 2017", jp: "2017 / 10" },
    content: {
      en: "Higashimatsuyama city in Saitama",
      jp: "埼玉県東松山市 ／ 「みる・知る・くらす展」"
    }
  },
  {
    _id: 19,
    filed: { en: "Sep. 2016", jp: "2016 / 9" },
    content: {
      en: "Azabu in Tokyo",
      jp: "東京都麻布"
    }
  },
  {
    _id: 18,
    filed: { en: "Aug. 2016", jp: "2016 / 8" },
    content: {
      en: "Asagaya in Tokyo",
      jp: "東京都阿佐ヶ谷"
    }
  },
  {
    _id: 17,
    filed: { en: "July 2016", jp: "2016 / 7" },
    content: {
      en: "Tsurugashima city in Saitama",
      jp: "埼玉県鶴ヶ島市"
    }
  },
  {
    _id: 16,
    filed: { en: "June 2016", jp: "2016 / 6" },
    content: {
      en: "Warabi city, Suginami ward, Ichikawa city",
      jp: "埼玉県蕨市、東京都杉並区、千葉県市川市 ／ 首都圏リレー展示"
    }
  },
  {
    _id: 15,
    filed: { en: "May 2016", jp: "2016 / 5" },
    content: {
      en: "Shiki city, Yokohama city",
      jp: "埼玉県志木市、神奈川県横浜市 ／ 首都圏リレー展示"
    }
  },
  {
    _id: 14,
    filed: { en: "Mar. 2016", jp: "2016 / 3" },
    content: {
      en: "Tottori city in Tottori",
      jp: "鳥取県鳥取市"
    }
  },
  {
    _id: 13,
    filed: { en: "Oct. 2015", jp: "2015 / 10" },
    content: {
      en: "Sapporo city in Hokkaido",
      jp: "北海道札幌市"
    }
  },
  {
    _id: 12,
    filed: { en: "Aug. 2015", jp: "2015 / 8" },
    content: {
      en: "Akaiwa city in Okayama",
      jp: "岡山県赤磐市"
    }
  },
  {
    _id: 11,
    filed: { en: "June 2015", jp: "2015 / 6" },
    content: {
      en: "Anegasaki city in Chiba",
      jp: "千葉県姉ヶ崎市"
    }
  },
  {
    _id: 10,
    filed: { en: "Apr. 2015", jp: "2015 / 4" },
    content: {
      en: "Canada Québec ／ World Uranium Symposium",
      jp: "カナダ ケベック ／ World Uranium Symposium"
    }
  },
  {
    _id: 9,
    filed: { en: "Mar. 2015", jp: "2015 / 3" },
    content: {
      en: "Paris ／ Galarie planète rouge",
      jp: "パリ ／ Galarie planète rouge "
    }
  },
  {
    _id: 8,
    filed: { en: "Dec. 2014", jp: "2014 / 12" },
    content: {
      en: "Keyaki peace charity concert in Tokyo",
      jp: "第33回けやき平和チャリティコンサート"
    }
  },
  {
    _id: 7,
    filed: { en: "Dec. 2014", jp: "2014 / 11" },
    content: { en: "Arami city in Shizuoka", jp: "静岡県熱海市" }
  },
  {
    _id: 6,
    filed: { en: "Dec. 2014", jp: "2014 / 11" },
    content: { en: "Higashimurayama city in Tokyo", jp: "東京都東村山市" }
  },
  {
    _id: 5,
    filed: { en: "Oct. 2014", jp: "2014 / 10" },
    content: { en: "Minamisoma city in Fukushima", jp: "福島県南相馬市" }
  },
  {
    _id: 4,
    filed: { en: "Sep. 2014", jp: "2014 / 9" },
    content: { en: "Koriyama city in Fukushima", jp: "福島県郡山市" }
  },
  {
    _id: 3,
    filed: { en: "Sep. 2014", jp: "2014 / 9" },
    content: { en: "Arami city in Shizuoka", jp: "東京都中野区" }
  },
  {
    _id: 2,
    filed: { en: "Aug. 2014", jp: "2014 / 8" },
    content: { en: "Minamisoma city in Fukushima", jp: "福島県南相馬市" }
  },
  {
    _id: 1,
    filed: { en: "Apr. 2014", jp: "2014 / 4" },
    content: { en: "Shinagawa in Tokyo", jp: "東京都品川区" }
  }
];

export function getExhibitionList() {
  return exhibitionList;
}
