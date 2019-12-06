import React, { Component } from "react";
import "./css/mobileApp.styl";
import bnrAppStore from "./imgs/bnr-app-store.svg";
import bnrGooglePlay from "./imgs/bnr-google-play.svg";
import tabVideo from "./videos/video_tb_jp.mp4";
import smtVideo from "./videos/video_sp_jp.mp4";
// import {videoScrollStart} from '../common/videoScrollStart';

class MobileApp extends Component {
  state = {
    videoPlay: false
  };
  // movie = React.createRef();

  render() {
    // const { videoPlay } = this.state;

    // // const movie = document.querySelector(".movie");
    // console.log("movie:", this.movie.current);

    // document.addEventListener("scroll", () => {
    //   let scrollY = window.scrollY;
    //   let videoPositionY = 112;
    //   console.log("scrollY:", scrollY);
    // });

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
            <video
              className="tabletWrap"
              loop
              autoPlay
              muted
              src={tabVideo}
              // loop={videoPlay}
              // autoPlay={videoPlay}
              // muted={videoPlay}
            />
            <video className="spWrap" src={smtVideo} loop autoPlay muted />
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
