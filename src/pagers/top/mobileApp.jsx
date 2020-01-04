import React, { Component } from "react";
import "./css/mobileApp.styl";
import bnrAppStore from "./imgs/bnr-app-store.svg";
import bnrGooglePlay from "./imgs/bnr-google-play.svg";
import imgApp from "./imgs/img-app.svg";
import { videos, sentences } from "./data/mobileApp";
import { getActive } from "../../components/common/getActiveClass";
import { getJpClass } from "../../components/common/getJpClass";
import { Event } from "../../asset/analytics";

class MobileApp extends Component {
  state = {
    videoPlay: false,
    videoType: "mobile"
  };

  handleVideoType(type) {
    this.setState({ videoType: type });
  }

  ga_AppStoreAccess = type => {
    const { lang } = this.props;
    if (type === "ios") {
      lang === "jp"
        ? Event("iOS App JP", "Access Japanese Apple Store", "APPLE_STORE_JP")
        : Event("iOS App EN", "Access English Apple Store", "APPLE_STORE_EN");
    } else {
      lang === "jp"
        ? Event(
            "Android JP App",
            "Access Japanese Google Play Store",
            "GOOGLE_PLAY_JP"
          )
        : Event(
            "Android EN App",
            "Access English Google Play Store",
            "GOOGLE_PLAY_EN"
          );
    }
  };

  render() {
    const { lang } = this.props;
    const videoType = this.state.videoType;

    return (
      <section className="mobileApp">
        <div className="wrap">
          <div className="text">
            <h1>
              <img className="imgApp" src={imgApp} alt="App icon" />
              <span>{sentences.title[lang]}</span>
            </h1>
            <p className={getJpClass(lang)}>{sentences.explain[lang]}</p>
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
            <p className="price">
              <span className="strike_through">{sentences.price[lang]}</span>
              {` `}&#8594;
              <span className="emp">{sentences.discountedPrice[lang]}</span>
              {sentences.unit[lang]} (50%off)
            </p>
            <a
              href={sentences.links.ios[lang]}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => this.ga_AppStoreAccess("ios")}
            >
              <img src={bnrAppStore} alt="Apple Store" />
            </a>
            <a
              href={sentences.links.android[lang]}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => this.ga_AppStoreAccess("android")}
            >
              <img src={bnrGooglePlay} alt="Google Play" />
            </a>
          </figure>
        </div>
      </section>
    );
  }
}

export default MobileApp;
