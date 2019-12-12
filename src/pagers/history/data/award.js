const awardList = [
  {
    _id: 3,
    emp: { en: "Honorary Mentions ", jp: "栄誉賞" },
    normal: {
      en: "in Prix Ars Electronica 2017",
      jp: "アルス・エレクトロニカ 2017"
    }
  },
  {
    _id: 2,
    emp: { en: "FUJIFILM Award ", jp: "富士フィルムアワード" },
    normal: { en: "in Kyotographie 2017", jp: "京都国際写真祭 2017" }
  },
  {
    _id: 1,
    emp: { en: "Special Jury Award ", jp: "審査員特別賞" },
    normal: {
      en: "in Lianzhou foto 2017",
      jp: "中国連州国際写真祭 2017"
    }
  }
];

export function getAwardList() {
  return awardList;
}
