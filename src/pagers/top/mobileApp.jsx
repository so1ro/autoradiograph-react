import React, { Component } from "react";
import "./css/mobileApp.styl";
import bnrAppStore from "./imgs/bnr-app-store.svg";
import bnrGooglePlay from "./imgs/bnr-google-play.svg";
import { videos, sentences } from "./data/mobileApp";
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
            <h1>{sentences.title[lang]}</h1>
            <p>{sentences.explain[lang]}</p>
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
              <span className="emp"> {sentences.discountedPrice[lang]}</span>
              {sentences.unit[lang]} (50%off)
            </p>
            <a
              href={sentences.links.ios[lang]}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={bnrAppStore} alt="Apple Store" />
            </a>
            <a
              href={sentences.links.android[lang]}
              target="_blank"
              rel="noreferrer noopener"
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
