import React, { Component } from "react";
import "./css/mobileApp.styl";
import bnrAppStore from "./imgs/bnr-app-store.svg";
import bnrGooglePlay from "./imgs/bnr-google-play.svg";
import { videos } from "./data/mobileApp";
import { getActive } from "../../components/common/getActiveClass";

class MobileApp extends Component {
  state = {
    videoPlay: false,
    videoType: "mobile"
  };

  handleVideoType(type) {
    this.setState({ videoType: type });
  }

  render() {
    const { lang } = this.props;
    const videoType = this.state.videoType;

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
                className={"mobile" + getActive(videoType, "mobile")}
                src={videos.sp[lang]}
                loop
                autoPlay
                muted
                playsInline
                // poster={videos.posterSp[lang]}
              />
              <video
                className={"tablet" + getActive(videoType, "tablet")}
                src={videos.tablet[lang]}
                loop
                autoPlay
                muted
                playsInline
                // poster={videos.posterTablet[lang]}
              />
            </figure>
            <p>
              <span
                onClick={() => this.handleVideoType("mobile")}
                className={"mobile" + getActive(videoType, "mobile")}
              >
                mobile
              </span>{" "}
              /{" "}
              <span
                onClick={() => this.handleVideoType("tablet")}
                className={"tablet" + getActive(videoType, "tablet")}
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
