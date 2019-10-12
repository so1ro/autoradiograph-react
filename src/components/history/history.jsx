import React, { Component } from "react";
import "../css/history.styl";
import Tab from "./tabs";
import { Route, Redirect } from "react-router-dom";
import Press from "./press";
import Exhibition from "./exhibition";
import Award from "./award";

class History extends Component {
  state = {};
  render() {
    return (
      <section className="history">
        {/* <h1>History</h1> */}
        <Tab />
        <Route path="/history/press" component={Press} />
        <Route path="/history/exhibition" component={Exhibition} />
        <Route path="/history/award" component={Award} />
        <Redirect from="/history" to="/history/press" />
      </section>
    );
  }
}

export default History;
