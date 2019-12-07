import React, { Component } from "react";
import "../css/history.styl";
import Tab from "./tabs";
// import { Route, Redirect } from "react-router-dom";
import Press from "./press";
import Exhibition from "./exhibition";
import Award from "./award";
import "./css/press.styl";
import "./css/tabs.styl";

class History extends Component {
  state = { tabSelect: "press" };

  handleTab = tab => {
    this.setState({ tabSelect: tab });
  };

  render() {
    const lang = this.props.lang;
    const tabSelect = this.state.tabSelect;

    return (
      <section className="history component">
        <Tab lang={lang} tabSelect={tabSelect} onHandleTab={this.handleTab} />
        <Press lang={lang} tabSelect={tabSelect} />
        <Exhibition lang={lang} tabSelect={tabSelect} />
        <Award lang={lang} tabSelect={tabSelect} />
        {/* <Redirect from="/history" to="/history/press" /> */}
      </section>
    );
  }
}

export default History;
