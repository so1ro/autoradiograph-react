const exhibitionList = [
  {
    _id: 4,
    key_place: "4-place",
    key_date: "4-date",
    date: { en: "Nov. 2017", jp: "2017 / 10" },
    place: { en: "Paris", jp: "フランス パリ Speos" }
  },
  {
    _id: 3,
    key_place: "3-place",
    key_date: "3-date",
    date: { en: "Nov. 2017", jp: "2017 / 10" },
    place: { en: "Paris", jp: "フランス パリ Speos" }
  },
  {
    _id: 2,
    key_place: "2-place",
    key_date: "2-date",
    date: { en: "Nov. 2017", jp: "2017 / 10" },
    place: { en: "Paris", jp: "フランス パリ Speos" }
  },
  {
    _id: 1,
    key_place: "1-place",
    key_date: "1-date",
    date: { en: "Oct. 2016", jp: "2016 / 10" },
    place: {
      en: "Solo Exhibition in Hiroshima city",
      jp: "広島市 旧日本銀行広島支店"
    }
  }
];

export function getExhibitionList() {
  return exhibitionList;
}
