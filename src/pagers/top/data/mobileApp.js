import video_sp_jp from "../videos/video_sp_jp.mp4";
import video_sp_en from "../videos/video_sp_en.mp4";
import video_tb_jp from "../videos/video_tb_jp.mp4";
import video_tb_en from "../videos/video_tb_en.mp4";

// videoへの画像（poster）設置は自動再生されないことがあるためキャンセル
// import poster_sp_en from "../imgs/poster_sp_en.png";
// import poster_sp_jp from "../imgs/poster_sp_jp.png";
// import poster_tb_en from "../imgs/poster_tb_en.png";
// import poster_tb_jp from "../imgs/poster_tb_jp.png";

export const videos = {
  sp: { en: video_sp_en, jp: video_sp_jp },
  tablet: { en: video_tb_en, jp: video_tb_jp }
  // posterSp: { en: poster_sp_en, jp: poster_sp_jp },
  // posterTablet: { en: poster_tb_en, jp: poster_tb_jp }
};

export const sentences = {
  title: { en: "App", jp: "アプリ" },
  explain: {
    en: "You can see all of archives through Autoradiograph App.",
    jp:
      "すべての放射線像をご覧いただくことができます。拡大縮小・色の反転・3次元放射線像の操作・採取地の表示などアプリにしか実現することができない機能が備わっています。"
  },
  discountedPrice: { en: "$13.99", jp: "1480" },
  price: { en: "$27.98", jp: "2960円" },
  unit: { en: "", jp: "円" },
  links: {
    ios: {
      en:
        "https://apps.apple.com/jp/app/autoradiograph/id1074077814?mt=8&ign-mpt=uo%3D4",
      jp:
        "https://apps.apple.com/jp/app/%E6%94%BE%E5%B0%84%E7%B7%9A%E5%83%8F-%E6%94%BE%E5%B0%84%E8%83%BD%E3%82%92%E5%8F%AF%E8%A6%96%E5%8C%96%E3%81%99%E3%82%8B-%E6%A3%AE%E6%95%8F-%E5%8A%A0%E8%B3%80%E8%B0%B7%E9%9B%85%E9%81%93/id1041868144?mt=8&ign-mpt=uo%3D4"
    },
    android: {
      en:
        "https://play.google.com/store/apps/details?id=org.autoradiograph.app.en.second&hl=ja&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
      jp:
        "https://play.google.com/store/apps/details?id=org.autoradiograph.app_02&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
    }
  }
};
