import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Lang from "./common/language";
import { getJpClass } from "../components/common/getJpClass";
import disableScroll from "disable-scroll";

import { texts } from "./data/nav-text";
import "./css/nav.styl";

class Nav extends Component {
  state = {
    spMenuActive: false
  };

  onSpMenuHandle = off => {
    if (off) {
      disableScroll.off(); // re-enable scroll
      return this.setState({ spMenuActive: false });
    }
    let spMenuActive = this.state.spMenuActive;
    spMenuActive = !spMenuActive;
    this.setState({ spMenuActive });
    spMenuActive ? disableScroll.on() : disableScroll.off();
  };

  getSpMenuClasses = () => {
    let activeCheck = this.state.spMenuActive ? "active" : "";
    return `menu-trigger ${activeCheck}`;
  };

  getTitle(path, lang) {
    return lang === "jp" ? <img src={path} alt="放射線像" /> : path;
  }

  render() {
    const { lang, onChnageLnag } = this.props;
    const selectedTexts = { ...texts[lang] };
    const { getTitle, onSpMenuHandle, getSpMenuClasses } = this;

    return (
      <React.Fragment>
        <nav className="gNav">
          {/* Logo */}
          <h1
            className={getJpClass(lang)}
            onClick={() => onSpMenuHandle("off")}
          >
            <Link to="/">{getTitle(selectedTexts.title, lang)}</Link>
          </h1>

          {/* Links */}
          <ul
            className={
              "navLink" +
              getJpClass(lang) +
              (this.state.spMenuActive ? " active" : "")
            }
          >
            <li onClick={() => onSpMenuHandle("off")}>
              <NavLink to="/" exact>
                {selectedTexts.top}
              </NavLink>
            </li>
            <li onClick={() => onSpMenuHandle("off")}>
              <NavLink to="/history">{selectedTexts.history}</NavLink>
            </li>
            <li onClick={() => onSpMenuHandle("off")}>
              <NavLink to="/shortmovie">{selectedTexts.shortmovie}</NavLink>
            </li>
            {/* <li onClick={() => onSpMenuHandle("off")}>
              <NavLink to="/print">{selectedTexts.print}</NavLink>
            </li> */}
            <li onClick={() => onSpMenuHandle("off")}>
              <NavLink to="/contact">{selectedTexts.contact}</NavLink>
            </li>
            <li className="lang">
              <Lang onChnageLnag={onChnageLnag} />
            </li>
          </ul>

          {/* CV */}
          <ul className="navCV">
            <li>
              <a
                href={selectedTexts.patreon}
                target="_blank"
                rel="noreferrer noopener"
              >
                Patreon
              </a>
            </li>
            <li>
              <NavLink className="disactive" to="/">
                Log in
              </NavLink>
            </li>
          </ul>
        </nav>

        <nav className="spMenu">
          <h3>Menu</h3>
          <button
            onClick={() => onSpMenuHandle()}
            className={getSpMenuClasses()}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </React.Fragment>
    );
  }
}

export default Nav;
