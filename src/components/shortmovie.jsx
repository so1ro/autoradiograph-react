import React from "react";
import "./css/shortmovie.styl";

const ShortMovie = () => {
  return (
    <main className="shortmovie">
      <div className="card">
        <iframe
          src="https://player.vimeo.com/video/289985456"
          frameborder="0"
          width="1000"
          height="562"
          allow="autoplay; fullscreen"
          allowfullscreen
          title="How to take Autoradiograph"
        ></iframe>
      </div>
    </main>
  );
};

export default ShortMovie;
