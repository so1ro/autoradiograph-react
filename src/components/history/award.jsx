import React from "react";
import "./css/award.styl";
import { getAwardList } from "./data/award";

const Award = ({ lang }) => {
  const awardList = [...getAwardList()];

  return (
    <div className="award">
      {awardList.map(list => (
        <h2 key={list._id}>
          <span className="emp">{list.emp[lang]}</span>
          <span>{list.normal[lang]}</span>
        </h2>
      ))}
    </div>
  );
};

export default Award;
