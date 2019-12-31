const ua = navigator.userAgent.toLowerCase();
const ver = navigator.appVersion.toLowerCase();

// IE(11以外)
const isMSIE = ua.indexOf("msie") > -1 && ua.indexOf("opera") === -1;
// IE6
const isIE6 = isMSIE && ver.indexOf("msie 6.") > -1;
// IE7
const isIE7 = isMSIE && ver.indexOf("msie 7.") > -1;
// IE8
const isIE8 = isMSIE && ver.indexOf("msie 8.") > -1;
// IE9
const isIE9 = isMSIE && ver.indexOf("msie 9.") > -1;
// IE10
const isIE10 = isMSIE && ver.indexOf("msie 10.") > -1;
// IE11
const isIE11 = ua.indexOf("trident/7") > -1;
// IE
const isIE = isMSIE || isIE11;
// Edge
// const isEdge = ua.indexOf("edge") > -1;

// // Google Chrome
// const isChrome = ua.indexOf("chrome") > -1 && ua.indexOf("edge") === -1;
// // Firefox
// const isFirefox = ua.indexOf("firefox") > -1;
// // Safari
// const isSafari = ua.indexOf("safari") > -1 && ua.indexOf("chrome") === -1;
// // Opera
// const isOpera = ua.indexOf("opera") > -1;

const message =
  "In order to see this website, please change your Internet Explorer to a modern browser. e.g.) Chrome/Firefox/Edge\n\nInternet Explorer以外のブラウザでご覧ください。\n例) Chrome/Firefox/Edge";
// 使用例
if (isIE) {
  alert(message);
}
if (isIE6) {
  alert(message);
}
if (isIE7) {
  alert(message);
}
if (isIE8) {
  alert(message);
}
if (isIE9) {
  alert(message);
}
if (isIE10) {
  alert(message);
}
if (isIE11) {
  alert(message);
}
