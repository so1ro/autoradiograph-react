import React from "react";
import "./css/award.styl";
import { getAwardList } from "./data/award";
import { getActive } from "../common/getActiveClass";

const Award = ({ lang, tabSelect }) => {
  const awardList = [...getAwardList()];

  return (
    <div className={"award" + getActive(tabSelect, "award")}>
      {awardList.map(list => (
        <h2 key={list._id}>
          <span className="emp">{list.emp[lang]}</span>
          <br className="sp" />
          <span>{list.normal[lang]}</span>
        </h2>
      ))}
    </div>
  );
};

export default Award;
