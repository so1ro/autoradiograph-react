import React, { Component } from "react";
import { getExhibitionList } from "./data/exhibition";
import "./css/exhibition.styl";
import { getActive } from "../../components/common/getActiveClass";
import { getJpClass } from "../../components/common/getJpClass";
// import PictureGrid from "../../components/pictureGrid";

class Exhibition extends Component {
  render() {
    const exhibitionList = [...getExhibitionList()];
    const { lang, tabSelect } = this.props;

    return (
      <div className={"exhibition" + getActive(tabSelect, "exhibition")}>
        <ul>
          {exhibitionList.map(exhibition => (
            <React.Fragment key={exhibition._id}>
              <li className="date">{exhibition.date[lang]}</li>
              <li className={"place" + getJpClass(lang)}>
                {exhibition.place[lang]}
              </li>
            </React.Fragment>
          ))}
        </ul>
        {/* <PictureGrid lang={lang} items={exhibitPictureList} /> */}
      </div>
    );
  }
}

export default Exhibition;
