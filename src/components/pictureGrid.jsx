import React from "react";
import { Picture } from "react-responsive-picture";
import { getJpClass } from "./common/getJpClass";

const PictureGrid = ({ lang, items }) => {
  return (
    <ul>
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
