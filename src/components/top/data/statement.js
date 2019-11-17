const statement = {
  en:
    "In 2011, huge amounts of radioactive particles were released into the air from a nuclear power plant in Japan. More than 150,000 people had to be evacuated from neighboring towns and communities. Thereafter, concerns about food safety and health spread across the nation. And even now, the problem of how to dispose of the contaminated soil collected in the decontamination work is a major issue. <br>The radioactive contamination continues to be hotly debated throughout Japan and is a recurring topic in the media. And yet, very few have taken on the task of capturing a visual image of the harmful radiation for the public to see, such as enabling people to see the radiation emitted by objects directly subject to the fallout, to see where the radiation is concentrating in the food chain and in contaminated foodstuffs, and how the flora and the fauna living in radioactive areas take in radioactive substances and where these substances accumulate inside them. This kind of work has not been made public and the media still repeats that radiation is invisible, cannot be heard and is odorless. \n\nLooking back on history, radiation was discovered through a photographic plate in 1896. Antoine Henri Becquerel left a photographic plate beside uranium salt in the darkness of a bureau drawer, for a subsequent experiment. When he retrieved the plate, he found that the plate had been already exposed. Two black shadows appearing on the image led to the discovery of radiation and he received the Nobel Prize in Physics for his discovery. Thus, we have had the means to visualize radiation since the beginning of its discovery. Nevertheless, visual record of radioactive contamination is quite limited even after we witnessed the aftermath of the atomic bomb explosions in Hiroshima and Nagasaki in 1945, the global fallout from nuclear bomb tests in the 1950s/60s, and the nuclear disasters at Three Mile Island (1979) and Chernobyl (1986).\n\nI decided to leave behind as many visual records of the contamination from the nuclear disaster in 2011 as possible. I am fortunate enough to receive the cooperation of Satoshi Mori, Professor emeritus of the University of Tokyo in this endeavor to use autoradiography to make radioactive contamination visible. During the past 6 years, we have been able cover a wide range of specimens from daily necessities to flora and fauna.\n\nI hope that these disquieting but meaningful images reach those affected by other nuclear disasters, such as at Three Mile Island and Chernobyl, and the downwinders of nuclear bomb test sites, suffering from adverse health effects, and help them see and understand what they were exposed to. In addition, it is my hope that these images become a reference for everyone on the planet, reminding us of the stark reality and consequences of nuclear disasters, which have the potential of occurring at anytime, whether caused by an act of nature, the negligence of man, or even at the hands of terrorists.",
  jp:
    "2011年福島第一原発事故に伴う放射性物質の漏えいにより、原発周辺の自治体、浪江町、飯舘村に至る広大な土地と山谷を私たちは失いました。放射性物質は福島県内だけでなく北関東や東京はもちろん、その多くは太平洋へ向かって流れていき、海外でも観測されています。この放射能汚染による避難者は福島県内だけで14万人に上りました。\n\n2011年福島第一原発事故に伴う放射性物質の漏えいにより、原発周辺の自治体、浪江町、飯舘村に至る広大な土地と山谷を私たちは失いました。放射性物質は福島県内だけでなく北関東や東京はもちろん、その多くは太平洋へ向かって流れていき、海外でも観測されています。この放射能汚染による避難者は福島県内だけで14万人に上りました。\n\n2011年福島第一原発事故に伴う放射性物質の漏えいにより、原発周辺の自治体、浪江町、飯舘村に至る広大な土地と山谷を私たちは失いました。放射性物質は福島県内だけでなく北関東や東京はもちろん、その多くは太平洋へ向かって流れていき、海外でも観測されています。この放射能汚染による避難者は福島県内だけで14万人に上りました。\n\n"
};

const comments = [
  {
    _id: 1,
    name: { en: "Masamichi Kagaya", jp: "加賀谷 雅道" },
    jobTitle: { en: "Research Photographer", jp: "映像作家／プログラマー" },
    avatarName: "kagaya",
    en:
      "Kagaya says that Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.",
    jp:
      "加賀谷はこう言う Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. \n\n加賀谷はこう言う Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.加賀谷はこう言う Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo."
  },
  {
    _id: 2,
    name: { en: "Satoshi Mori", jp: "森敏" },
    jobTitle: {
      en: "Biologist, Emeritus professor in the university of Tokyo",
      jp: "植物栄養学／東京大学名誉教授"
    },
    avatarName: "mori",
    en:
      "Mori says that Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.",
    jp:
      "森教授はこう言う Lorem ipsum dolor sit amet,\n\n森教授はこう言う Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.加賀谷はこう言う Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.加賀谷はこう言う Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo."
  }
];

export function getStatement() {
  return statement;
}

export function getComments() {
  return comments;
}
