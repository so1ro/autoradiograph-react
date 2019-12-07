import video_sp_jp from "../videos/video_sp_jp.mp4";
import video_sp_en from "../videos/video_sp_en.mp4";
import video_tb_jp from "../videos/video_tb_jp.mp4";
import video_tb_en from "../videos/video_tb_en.mp4";

const videos = {
  sp: { en: video_sp_en, jp: video_sp_jp },
  tablet: { en: video_tb_en, jp: video_tb_jp }
};

export function getVideos() {
  return videos;
}
