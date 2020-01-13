import React from "react";
import PictureGrid from "../../components/common/pictureGrid";
import { pressList } from "./data/press";
import { getActive } from "../../components/common/getActiveClass";

const Press = ({ lang, tabSelect }) => {
  return (
    <div className={"press" + getActive(tabSelect, "press")}>
      <PictureGrid lang={lang} items={pressList} />
    </div>
  );
};

export default Press;
