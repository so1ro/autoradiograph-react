import React, { Component } from "react";
import Award from "./history/award";
import "./css/top.styl";
import MobileApp from "./top/mobileApp";
import Statement from "./top/statement";
import MainVisual from "./top/mainVisual";

class Top extends Component {
  state = {};
  render() {
    const { lang } = this.props;
    return (
      <div className="top">
        <MainVisual lang={lang} />
        <section>
          <Award lang={lang} />
        </section>
        <MobileApp lang={lang} />
        <Statement lang={lang} />
      </div>
    );
  }
}

export default Top;
