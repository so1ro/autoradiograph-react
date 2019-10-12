import img04 from "./imgs/04.jpg";
import img03 from "./imgs/03.jpg";
import img02 from "./imgs/02.jpg";
import img01 from "./imgs/01.jpg";

const pressList = [
  {
    _id: "04",
    imgUrl: img04,
    title: "Sekai",
    date: "Mar. 2019"
  },
  {
    _id: "03",
    imgUrl: img03,
    title: "Sekai",
    date: "Mar. 2019"
  },
  {
    _id: "02",
    imgUrl: img02,
    title: "Reuter",
    date: "Mar. 2018"
  },
  {
    _id: "01",
    imgUrl: img01,
    title: "Liberation",
    date: "Mar. 2017"
  }
];

export function getPressList() {
  return pressList;
}
