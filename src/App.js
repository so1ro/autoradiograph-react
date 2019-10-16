import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/nav";
import Top from "./components/top";
import History from "./components/history/history";
import ShortMovie from "./components/shortmovie";
import NotFound from "./components/not-found";
import "./App.styl";
import Footer from "./components/footer";
import Print from "./components/print";
import Contact from "./components/contact";
import { thisExpression } from "@babel/types";

import "./asset/geolocation";

class App extends Component {
  state = {
    geolocation: []
  };

  // componentDidMount() {
  //   this.getGeolocation();
  // }

  // getGeolocation() {
  //   fetch("https://geoip-db.com/jsonp", { mode: "cors" })
  //     .then(result => result.json())
  //     .then(result => this.setState({ geolocation: result }));
  // }

  render() {
    return (
      <div className="App">
        <Nav />
        <main>
          <Switch>
            <Route
              path="/history"
              component={props => <History sortBy={"newest"} {...props} />}
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
            <Route path="/" exact component={Top} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
