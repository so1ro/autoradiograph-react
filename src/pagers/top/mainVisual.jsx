import React, { Component } from "react";
import "./css/mainVisual.styl";

class MainVisual extends Component {
  state = {};
  render() {
    return (
      <section className="mainVisual">
        <iframe
          title="mainvisual"
          src="http://so1photo.xsrv.jp/web/3d/01_HornetNest/index.html"
        />
      </section>
    );
  }
}

export default MainVisual;
