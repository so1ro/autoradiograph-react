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
    const lang = this.props.lang;
    return (
      <section className="history">
        <Tab lang={lang} />
        <Route
          path="/history/press"
          component={props => <Press lang={lang} />}
        />
        <Route
          path="/history/exhibition"
          component={props => <Exhibition lang={lang} />}
        />
        <Route
          path="/history/award"
          component={props => <Award lang={lang} />}
        />
        <Redirect from="/history" to="/history/press" />
      </section>
    );
  }
}

export default History;
