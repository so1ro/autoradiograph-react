import React from "react";
import { Picture } from "react-responsive-picture";
import { getJpClass } from "./common/getJpClass";
import "./css/pictureGrid.styl";

const PictureGrid = ({ lang, items }) => {
  return (
    <ul className="pictureGrid">
      {items.map(item => (
        <li key={item._id}>
          <div>
            <Picture src={item.imgUrl} alt={item.title} />
            <span className={"caption" + getJpClass(lang)}>
              {item.title[lang]} <span className="date">( {item.date} )</span>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PictureGrid;
