import React from "react";
import "./css/mobileApp.styl";
import bnrAppStore from "./imgs/bnr-app-store.svg";
import bnrGooglePlay from "./imgs/bnr-google-play.svg";

const MobileApp = ({ lang }) => {
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
        <div className="movie">
          <div className="tabletWrap">
            <div className="tablet">
              <video src="" width="372" height="546"></video>
            </div>
          </div>
          <div className="spWrap">
            <div className="sp">
              <video src="" width="400" height="572"></video>
            </div>
          </div>
        </div>
        <figure className="banner">
          <img src={bnrAppStore} alt="Apple Store" />
          <img src={bnrGooglePlay} alt="Google Play" />
        </figure>
      </div>
    </section>
  );
};

export default MobileApp;
