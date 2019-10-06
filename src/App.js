import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/nav";
import Top from "./components/top";
import History from "./components/history";
import ShortMovie from "./components/shortmovie";
import NotFound from "./components/not-found";
import "./App.styl";
import Footer from './components/footer';

class App extends Component {
  state = {};
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
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Top} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
