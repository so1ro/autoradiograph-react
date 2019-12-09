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
