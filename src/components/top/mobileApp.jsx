import React, { Component } from "react";
import "./css/mobileApp.styl";
import bnrAppStore from "./imgs/bnr-app-store.svg";
import bnrGooglePlay from "./imgs/bnr-google-play.svg";
import { getVideos } from "./data/mobileApp.js";

class MobileApp extends Component {
  state = {
    videoPlay: false,
    videoType: "mobile"
  };

  handleVideoType(type) {
    this.setState({ videoType: type });
    console.log(this.state.videoType);
  }

  getActive(className) {
    return className + (this.state.videoType === className ? " active" : "");
  }

  render() {
    const { lang } = this.props;
    const videos = getVideos();

    return (
      <section className="mobileApp">
        <div className="wrap">
          <div className="text">
            <h1>App</h1>
            <p>
              You can see all of archives
              <br />
              through Autoradiograph App
              <br />
              <br />
              $20
            </p>
          </div>
          <div ref={this.movie} className="movie">
            <figure>
              <video
                className={this.getActive("mobile")}
                src={videos.sp[lang]}
                loop
                autoPlay
                muted
              />
              <video
                className={this.getActive("tablet")}
                loop
                autoPlay
                muted
                src={videos.tablet[lang]}
              />
            </figure>
            <p>
              <span
                onClick={() => this.handleVideoType("mobile")}
                className={this.getActive("mobile")}
              >
                mobile
              </span>{" "}
              /{" "}
              <span
                onClick={() => this.handleVideoType("tablet")}
                className={this.getActive("tablet")}
              >
                tablet
              </span>
            </p>
          </div>
          <figure className="banner">
            <img src={bnrAppStore} alt="Apple Store" />
            <img src={bnrGooglePlay} alt="Google Play" />
          </figure>
        </div>
      </section>
    );
  }
}

export default MobileApp;
