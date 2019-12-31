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
