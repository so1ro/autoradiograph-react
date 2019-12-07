import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
// import { thisExpression } from "@babel/types";

class App extends Component {
  state = {
    lang: ""
  };

  componentDidMount() {
    const ipgeolocationApi = new IPGeolocationAPI(
      "db9994189ecf42fbb9ded60137264847",
      false
    );
    // Get complete geolocation for the calling machine's IP address
    ipgeolocationApi.getGeolocation(this.handleResponse);

    // const checkCountry = document.querySelector("#checkCountry");
    // checkCountry.addEventListener("click", () => alert(this.state.lang));
  }

  // Function to handle response from IP Geolocation API
  handleResponse = json => {
    const geolocation = json.country_code2.toLowerCase();
    const lang = geolocation === "jp" ? "jp" : "en"; //"en" : "jp"
    this.setState({ lang }); //": 'en'"
  };

  changeLang = lang => {
    this.setState({ lang });
  };

  render() {
    return (
      <div className="App">
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
                <ShortMovie addProps={"addedProps"} {...props} />
              )}
            />
            <Route
              path="/print"
              component={props => <Print addProps={"addedProps"} {...props} />}
            />
            <Route
              path="/contact"
              component={props => (
                <Contact addProps={"addedProps"} {...props} />
              )}
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
