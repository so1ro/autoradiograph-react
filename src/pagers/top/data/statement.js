const currentYear = new Date().getFullYear();
const duringYears = currentYear - 2011;

const statement = {
  en:
    "In 2011, huge amounts of radioactive particles were released into the air from a nuclear power plant in Japan. More than 150,000 people had to be evacuated from neighboring towns and communities. Thereafter, concerns about food safety and health spread across the nation. And even now, the problem of how to dispose of the contaminated soil collected in the decontamination work is a major issue.\n\nThe radioactive contamination continues to be hotly debated throughout Japan and is a recurring topic in the media. And yet, very few have taken on the task of capturing a visual image of the harmful radiation for the public to see, such as enabling people to see the radiation emitted by objects directly subject to the fallout, to see where the radiation is concentrating in the food chain and in contaminated foodstuffs, and how the flora and the fauna living in radioactive areas take in radioactive substances and where these substances accumulate inside them. This kind of work has not been made public and the media still repeats that radiation is invisible, cannot be heard and is odorless. \n\nLooking back on history, radiation was discovered through a photographic plate in 1896. Antoine Henri Becquerel left a photographic plate beside uranium salt in the darkness of a bureau drawer, for a subsequent experiment. When he retrieved the plate, he found that the plate had been already exposed. Two black shadows appearing on the image led to the discovery of radiation and he received the Nobel Prize in Physics for his discovery. Thus, we have had the means to visualize radiation since the beginning of its discovery. Nevertheless, visual record of radioactive contamination is quite limited even after we witnessed the aftermath of the atomic bomb explosions in Hiroshima and Nagasaki in 1945, the global fallout from nuclear bomb tests in the 1950s/60s, and the nuclear disasters at Three Mile Island (1979) and Chernobyl (1986).\n\nI decided to leave behind as many visual records of the contamination from the nuclear disaster in 2011 as possible. I am fortunate enough to receive the cooperation of Satoshi Mori, Professor emeritus of the University of Tokyo in this endeavor to use autoradiography to make radioactive contamination visible. During the past " +
    duringYears +
    " years, we have been able cover a wide range of specimens from daily necessities to flora and fauna.\n\nI hope that these disquieting but meaningful images reach those affected by other nuclear disasters, such as at Three Mile Island and Chernobyl, and the downwinders of nuclear bomb test sites, suffering from adverse health effects, and help them see and understand what they were exposed to. In addition, it is my hope that these images become a reference for everyone on the planet, reminding us of the stark reality and consequences of nuclear disasters, which have the potential of occurring at anytime, whether caused by an act of nature, the negligence of man, or even at the hands of terrorists.",
  jp:
    "2011年3月11日、東日本大震災による地震と津波により、福島第一原子力発電所は全交流電源喪失状態に陥り、原子炉１号機から３号機が炉心溶融（メルトダウン）。大量の放射性物質が大気中に放出されました。15日夜に放出された放射性物質は南東からの風に乗り、浪江町、飯舘村さらに福島県の中通りに高濃度汚染地帯を形成しました。また複数の経路を辿って、茨城県から東京都、神奈川県、北関東および東北地方にも放射能汚染地帯を形成しました。\n\n私たちは、東京にいようとも福島県にいようとも、たとえ炉心溶融が起き、水素爆発により大破した福島第一原子力発電所の原子炉建屋の前に立ったとしても、放射能の存在を感じることはありません。放射能は、あまりに小さく目に見えず、音もなく、臭いもないからです。そのため私たちは放射能汚染地帯に住んでいるにもかかわらず、その存在を意識することなく今日に至っております。これまで食品や土壌が、NaI（TI）シンチレーション検出器やゲルマニウム半導体検出器によって、ベクレル（Bq）という放射能の量を表す単位で計測されてきました。また、空間線量や被曝線量が、人体への影響の目安となるシーベルト（Sv）という単位で計測されてきました。\n\nしかし、こういった数値情報では私たちは、放射能によって汚染された町、汚染された森、汚染された湖沼、汚染された生物の中で、放射能がどのように拡散したり濃縮したりしているのか、そして放射能から放射線が出ている様子を知ることは不可能でした。そこで私は放射能汚染を視覚的に認識すべく、オートラジオグラフィーという手法を用いて放射能汚染の可視化を行ってきました。"
};

const comments = [
  {
    _id: 1,
    name: { en: "Masamichi Kagaya", jp: "加賀谷 雅道" },
    jobTitle: {
      en: "Photographer / Programmer",
      jp: "映像作家"
    },
    avatarName: "kagaya",
    en:
      'In 2011, by trial and error, I began to try and somehow capture visual records of radioactive contamination.  Radiation is discussed in terms of "Bq" or "Sv" in scientific reports and textbooks and has been described with coined expressions like "black rain" or "nuclear fallout" to provoke readers\' imagination. I strongly believed that it was important and not impossible to leave behind visual records as well, and this was what someone in Japan had to do. ',
    jp:
      "2011年、私はどうにかして放射能汚染を視覚的な記録として残せないものかと試行錯誤を繰り返していました。これまで「黒い雨」「死の灰」といった言葉や、「ベクレル」「シーベルト」といった数値で表現されていた放射能を視覚的な映像として記録に残すこと、それは日本にいる誰かが今やらなければならないことであり、それは不可能なことではないだろうと確信を抱いていたのです。"
  },
  {
    _id: 2,
    name: { en: "Satoshi Mori", jp: "森敏" },
    jobTitle: {
      en: "Biologist, Emeritus professor (university of Tokyo)",
      jp: "植物栄養学／東京大学名誉教授"
    },
    avatarName: "mori",
    en:
      "In preparing for the next possible nuclear disaster, people in the world should keep visual images to know how things may be contaminated in the event of a nuclear accident. It would be my great pleasure if these autoradiographs would serve as educational material not only for Japanese but also for day-care centers, kindergartens, elementary schools, high schools and universities in nations where nuclear power plants exist.",
    jp:
      "起こりうる次回の原発事故に備えるには、何がどれくらいどのように汚染をするのかをビジュアルな映像として世界の人々は頭の中に収蔵しておく必要がある。この放射線像を、日本ばかりでなく、世界の原発周辺の保育園、幼稚園、小学校、中学校、高等学校、果ては大学までも、教養教育の教材に使って頂ければ望外の喜びです。"
  }
];

export function getStatement() {
  return statement;
}

export function getComments() {
  return comments;
}
