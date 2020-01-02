import React, { Component } from "react";
import "./css/mainVisual.styl";
import {
  mainVisual,
  subtitle,
  selectMainVisual,
  popUpText
} from "./data/mainVisual";
import downArrow from "./imgs/down-arrow.svg";
import disableScroll from "disable-scroll";

class MainVisual extends Component {
  state = {
    selectedMV_Number: selectMainVisual(), //selectMainVisual()
    descriptionOpen: false,
    popUp: false
  };

  handleArrow = () => {
    let descriptionOpen = this.state.descriptionOpen;
    this.setState({ descriptionOpen: !descriptionOpen });
  };

  handlePopUp = () => {
    this.setState({ popUp: true });
    setTimeout(() => {
      this.setState({ popUp: false });
    }, 2000);
  };

  render() {
    let mainVisualData = mainVisual[this.state.selectedMV_Number];
    const { lang } = this.props;
    const { descriptionOpen, popUp } = this.state;
    return (
      <section
        className="mainVisual"
        onMouseEnter={() => disableScroll.on()}
        onMouseLeave={() => disableScroll.off()}
      >
        <iframe
          className={descriptionOpen ? "open" : ""}
          title="mainvisual"
          src={mainVisualData.dataUrl}
        />
        <p className={"subtitle" + (descriptionOpen ? " open" : "")}>
          {subtitle}
        </p>
        <ul className={"text" + (descriptionOpen ? " open" : "")}>
          <li className="title" onClick={this.handleArrow}>
            {mainVisualData.title[lang]}
            <img onClick={this.handleArrow} src={downArrow} alt="" />
          </li>
          <li className="location">{mainVisualData.location[lang]}</li>
          <li className="description">{mainVisualData.description[lang]}</li>
          <li className="cover"></li>
          <img
            className="arrowPC"
            onClick={this.handleArrow}
            src={downArrow}
            alt=""
          />
        </ul>
        <p className="count">
          <span className={"popUp" + (popUp ? " active" : "")}>
            {popUpText[lang]}　
          </span>
          <span onMouseOver={this.handlePopUp} onClick={this.handlePopUp}>
            {selectMainVisual() + 1}/{mainVisual.length}
          </span>
        </p>
      </section>
    );
  }
}

export default MainVisual;
