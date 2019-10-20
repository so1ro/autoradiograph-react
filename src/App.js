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
import IPGeolocationAPI from "ip-geolocation-api-javascript-sdk";
// import { thisExpression } from "@babel/types";

class App extends Component {
  state = {
    geolocation: ""
  };

  componentDidMount() {
    const ipgeolocationApi = new IPGeolocationAPI(
      "db9994189ecf42fbb9ded60137264847",
      false
    );
    // Get complete geolocation for the calling machine's IP address
    ipgeolocationApi.getGeolocation(this.handleResponse);
    const checkCountry = document.querySelector("#checkCountry");
    checkCountry.addEventListener("click", () => alert(this.state.geolocation));
  }

  // Function to handle response from IP Geolocation API
  handleResponse = json => {
    console.log(json);
    console.log("json.country_code2:" + json.country_code2);
    this.setState({ geolocation: json.country_code2 });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

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
