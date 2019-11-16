import React, { Component } from "react";
import Award from "./history/award";
import "./css/top.styl";
import MobileApp from "./top/mobileApp";
import Summary from "./top/summary";

class Top extends Component {
  state = {};

  render() {
    const { lang } = this.props;
    return (
      <section className="top component">
        <Award lang={lang} />
        <MobileApp lang={lang} />
        <Summary lang={lang} />
      </section>
    );
  }
}

export default Top;
