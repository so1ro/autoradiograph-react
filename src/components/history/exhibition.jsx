import React, { Component } from "react";
import { getExhibitionList } from "./data/exhibition";
import "./css/exhibition.styl";

class Exhibition extends Component {
  render() {
    const exhibitionList = [...getExhibitionList()];
    const { lang } = this.props;

    return (
      <ul className="exhibition">
        {exhibitionList.map(exhibition => (
          <React.Fragment key={exhibition._id}>
            <li className="date">{exhibition.date[lang]}</li>
            <li className="place">{exhibition.place[lang]}</li>
          </React.Fragment>
        ))}
      </ul>
    );
  }
}

export default Exhibition;
