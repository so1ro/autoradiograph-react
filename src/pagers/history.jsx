import React, { Component } from "react";
import "./css/history.styl";
import Tab from "./history/tabs";
// import { Route, Redirect } from "react-router-dom";
import Press from "./history/press";
import Exhibition from "./history/exhibition";
import Award from "./history/award";
import "./history/css/press.styl";
import "./history/css/tabs.styl";
import { Helmet } from "react-helmet";

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
        <Helmet>
          <meta charSet="utf-8" />
          <title>History | 放射線像／Autoradiograph｜公式サイト／Official website</title>
          <link rel="canonical" href="https://www.autoradiograph.org/history" />
          <meta
            property="og:title"
            content="History | 放射線像／Autoradiograph｜公式サイト／Official website"
          />
          <meta property="og:url" content="www.autoradiograph.org/history" />
          <meta
            property="og:site_name"
            content="History | 放射線像／Autoradiograph｜公式サイト／Official website"
          />
        </Helmet>
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
