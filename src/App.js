import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "./components/nav";
import Top from "./pagers/top";
import History from "./pagers/history";
import ShortMovie from "./pagers/shortmovie";
import NotFound from "./components/not-found";
import "./App.styl";
import Landscape from "./components/landscape";
import Footer from "./components/footer";
import Print from "./pagers/print";
import Contact from "./pagers/contact";
import IPGeolocationAPI from "ip-geolocation-api-javascript-sdk";
import "./components/common/userAgent";
// import { thisExpression } from "@babel/types";

class App extends Component {
  state = {
    lang: "jp"
  };

  componentDidMount() {
    // geolocation check
    const ipgeolocationApi = new IPGeolocationAPI(
      "db9994189ecf42fbb9ded60137264847",
      false
    );
    // Get complete geolocation for the calling machine's IP address
    ipgeolocationApi.getGeolocation(this.handleResponse);

    // IE check
  }

  // Function to handle response from IP Geolocation API
  handleResponse = json => {
    const geolocation = json.country_code2.toLowerCase();
    if (geolocation === "jp") return;
    const lang = "en"; //"en" : "jp"
    this.setState({ lang }); //": 'en'"
  };

  changeLang = lang => {
    this.setState({ lang });
  };

  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Autoradiograph/放射線像</title>
          <link rel="canonical" href="https://www.autoradiograph.org" />
          <meta property="og:title" content="Autoradiograph/放射線像" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Visualize radiation/放射能を可視化するプロジェクト"
          />
          <meta property="og:url" content="www.autoradiograph.org" />
          <meta property="og:site_name" content="Autoradiograph/放射線像" />
          <meta property="og:image" content="サムネイル画像のURL" />
        </Helmet>
        <Nav lang={this.state.lang} onChnageLnag={this.changeLang} />
        <main>
          <Switch>
            <Route
              path="/history"
              component={props => <History lang={this.state.lang} {...props} />}
            />
            <Route
              path="/shortmovie"
              component={props => (
                <ShortMovie lang={this.state.lang} {...props} />
              )}
            />
            <Route
              path="/print"
              component={props => <Print lang={this.state.lang} {...props} />}
            />
            <Route
              path="/contact"
              component={props => <Contact lang={this.state.lang} {...props} />}
            />
            <Route path="/not-found" component={NotFound} />
            <Route
              path="/"
              exact
              component={props => <Top lang={this.state.lang} {...props} />}
            />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Landscape lang={this.state.lang} />
        <Footer lang={this.state.lang} onChnageLnag={this.changeLang} />
      </div>
    );
  }
}

export default App;
