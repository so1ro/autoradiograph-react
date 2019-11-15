import React, { Component } from "react";
import Award from "./history/award";

class Top extends Component {
  state = {};

  render() {
    const { lang } = this.props;
    return (
      <div className="top">
        <Award lang={lang} />
        {/* <h1>Top</h1> */}
        {/* <button id="checkCountry">Click here to check your country!!</button> */}
      </div>
    );
  }
}

export default Top;
