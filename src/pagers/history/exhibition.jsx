import React from "react";
import { exhibitionList, exhibitPhotos } from "./data/exhibition";
import "./css/exhibition.styl";
import { getActive } from "../../components/common/getActiveClass";
import PictureGrid from "../../components/common/pictureGrid";
import Table from "../../components/common/table";

const Exhibition = ({ lang, tabSelect }) => {
  return (
    <div className={"exhibition" + getActive(tabSelect, "exhibition")}>
      <Table lang={lang} items={exhibitionList} />
      <PictureGrid lang={lang} items={exhibitPhotos} />
    </div>
  );
};

export default Exhibition;
