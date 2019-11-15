import React from "react";
import { Picture } from "react-responsive-picture";
import img from "./imgs/landscape.jpg";
import img_2x from "./imgs/landscape@2x.jpg";
import imgSp from "./imgs/landscape-sp.jpg";
import imgSp_2x from "./imgs/landscape-sp@2x.jpg";
import "./css/landscape.styl";

const Landscape = ({ lang }) => {
  const imgData = {
    _id: 0,
    imgUrl: `${img_2x} 2x, ${img} 1x`,
    imgUrlSp: `${imgSp_2x} 2x, ${imgSp} 1x`,
    title: { en: "Mount Adatara", jp: "安達太良山" }
  };

  return (
    <div className="landscape">
      <Picture src={imgData.imgUrl} alt={imgData.title[lang]} className="pc" />
      <Picture
        src={imgData.imgUrlSp}
        alt={imgData.title[lang]}
        className="sp"
      />
    </div>
  );
};

export default Landscape;
