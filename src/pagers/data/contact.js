export const inputParts = [
  {
    _id: 1,
    tag: "input",
    label: { en: "Name", jp: "お名前" },
    type: "text",
    id: "name",
    value: "this.state.name",
    autoFocus: false,
    row: ""
  },
  {
    _id: 2,
    tag: "input",
    label: { en: "Email address", jp: "メールアドレス" },
    type: "email",
    id: "email",
    value: "this.state.email",
    autoFocus: false,
    row: ""
  },
  {
    _id: 3,
    tag: "input",
    label: { en: "Title", jp: "件名" },
    type: "title",
    id: "title",
    value: "this.state.title",
    autoFocus: false,
    row: ""
  },
  {
    _id: 4,
    tag: "textarea",
    label: { en: "Message", jp: "メッセージ" },
    type: "",
    id: "message",
    value: "this.state.message",
    autoFocus: false,
    row: 14
  }
];

export const buttonText = {
  en: "Submit",
  jp: "送信"
};

export const afterSentMessage = {
  success: {
    en: "Thank you so much for your message! You'll see my feedback soon.",
    jp:
      "お問い合わせいただきありがとうございます。後ほどお返事いたしますので、しばらくお待ち下さい。"
  },
  fail: {
    en:
      "Oops.. Sorry, your message wasn't sent. Could you please send it via Facebook Messenger?",
    jp:
      "申し訳ありません！\nメールが送信されませんでした。お手数ですが、Facebookからご連絡いただけますでしょうか？"
  }
};
