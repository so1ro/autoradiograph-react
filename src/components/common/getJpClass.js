// export function getJpClass(lang) {
//   return lang === "jp" ? " jp" : "";
// }

export function getJpClass(lang, ...rest) {
  return lang === "jp" ? rest + " jp" : rest;
}
