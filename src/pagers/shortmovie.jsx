import React from "react";
import "./css/shortmovie.styl";

const ShortMovie = () => {
  return (
    <section className="component">
      <ul className="shortmovie-card">
        <li>
          <iframe
            src="https://player.vimeo.com/video/289985456"
            frameBorder="0"
            width="700"
            height="393"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="How to take Autoradiograph"
          ></iframe>
          <div className="caption">How to take Autoradiograph</div>
        </li>
        <li>
          <iframe
            src="https://player.vimeo.com/video/173840339"
            frameBorder="0"
            width="700"
            height="393"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="How to take Autoradiograph"
          ></iframe>
          <div className="caption">
            <span className="num">2015 - 2016</span>
          </div>
        </li>
        <li>
          <iframe
            src="https://player.vimeo.com/video/180967760"
            frameBorder="0"
            width="700"
            height="393"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="How to take Autoradiograph"
          ></iframe>
          <div className="caption">
            <span className="num">2012 - 2014</span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ShortMovie;
