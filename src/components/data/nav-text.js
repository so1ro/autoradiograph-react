import titleJP from "../imgs/title-jp.svg";

const texts = {
  en: {
    title: "Autoradiograph",
    top: "Top",
    history: "History",
    shortmovie: "Short movie",
    print: "Print",
    contact: "Contact"
  },
  jp: {
    title: `${titleJP}`, //"Autoradiograph",
    top: "トップ", //"Top",
    history: "ヒストリー", //"History",
    shortmovie: "ショートムービー", //"Short movie",
    print: "プリント", //"Print",
    contact: "コンタクト" //"Contact"
  }
};
export function getTexts() {
  return texts;
}
