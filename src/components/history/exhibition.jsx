import React, { Component } from "react";
import { getExhibitionList } from "./data/exhibition";
import "./css/exhibition.styl";

class Exhibition extends Component {
  state = { exhibitionList: [] };

  componentDidMount() {
    this.setState({ exhibitionList: getExhibitionList() });
  }
  render() {
    const exhibitionList = this.state.exhibitionList;
    return (
      <ul className="exhibition">
        {exhibitionList.map(exhibition => (
          <React.Fragment key={exhibition._id}>
            <li className="date">{exhibition.date}</li>
            <li className="place">{exhibition.place}</li>
          </React.Fragment>
        ))}
      </ul>
    );
  }
}

export default Exhibition;
