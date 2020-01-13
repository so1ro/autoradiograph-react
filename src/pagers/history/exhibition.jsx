import React, { Component } from "react";
import { getExhibitionList } from "./data/exhibition";
import "./css/exhibition.styl";
import { getActive } from "../../components/common/getActiveClass";
import PictureGrid from "../../components/common/pictureGrid";
import { pressList as exhibitPictureList } from "./data/press";
import Table from "../../components/common/table";

class Exhibition extends Component {
  render() {
    const exhibitionList = [...getExhibitionList()];
    const { lang, tabSelect } = this.props;

    return (
      <div className={"exhibition" + getActive(tabSelect, "exhibition")}>
        <Table lang={lang} items={exhibitionList} />
        <PictureGrid lang={lang} items={exhibitPictureList} />
      </div>
    );
  }
}

export default Exhibition;
