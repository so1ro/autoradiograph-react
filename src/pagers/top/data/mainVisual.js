export const mainVisual = [
  {
    id: 0,
    dataUrl: "http://so1photo.xsrv.jp/web/01_HornetNest/index.html",
    title: "",
    location: "",
    description: ""
  },
  {
    id: 1,
    dataUrl: "http://so1photo.xsrv.jp/web/02_Helmet/index.html",
    title: "",
    location: "",
    description: ""
  },
  {
    id: 2,
    dataUrl: "http://so1photo.xsrv.jp/web/03_T-shirt/index.html",
    title: "",
    location: "",
    description: ""
  },
  {
    id: 3,
    dataUrl: "http://so1photo.xsrv.jp/web/04_Cypress/index.html",
    title: "",
    location: "",
    description: ""
  }
];

export function selectMainVisual() {
  var today = Date.now();
  var days = Math.floor(today / (1000 * 60 * 60 * 24));
  const number = mainVisual.length;
  return days % number;
}
