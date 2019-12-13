import React, { Component } from "react";
import "./css/mainVisual.styl";
import { mainVisual, selectMainVisual } from "./data/mainVisual";

class MainVisual extends Component {
  state = { selectedMainVisual: selectMainVisual() };

  render() {
    let mainVisualData = mainVisual[this.state.selectedMainVisual];
    console.log("mainVisualData:", mainVisualData);
    return (
      <section className="mainVisual">
        <iframe title="mainvisual" src={mainVisualData.dataUrl} />
      </section>
    );
  }
}

export default MainVisual;
