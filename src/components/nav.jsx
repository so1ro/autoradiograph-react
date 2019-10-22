import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/nav.styl";
import { getTexts } from "./data/nav-text";
import Lang from "./common/language";
import { getJpClass } from "../components/common/getJpClass";

class Nav extends Component {
  state = {
    spMenuActive: false
  };

  onSpMenuHandle = () => {
    let spMenuActive = this.state.spMenuActive;
    spMenuActive = !spMenuActive;
    this.setState({ spMenuActive });
  };

  getSpMenuClasses() {
    let activeCheck = this.state.spMenuActive ? "active" : "";
    return `menu-trigger ${activeCheck}`;
  }

  getTitle(path, lang) {
    return lang === "jp" ? <img src={path} alt="放射線像" /> : path;
  }

  render() {
    const { lang, onChnageLnag } = this.props;
    const texts = getTexts();
    const selectedTexts = { ...texts[lang] };

    return (
      <React.Fragment>
        <nav className="gNav">
          {/* Logo */}
          <h1>
            <Link to="/">{this.getTitle(selectedTexts.title, lang)}</Link>
          </h1>

          {/* Links */}
          <ul className={"navLink" + getJpClass(lang)}>
            <li>
              <NavLink to="/" exact>
                {selectedTexts.top}
              </NavLink>
            </li>
            <li>
              <NavLink to="/history">{selectedTexts.history}</NavLink>
            </li>
            <li>
              <NavLink to="/shortmovie">{selectedTexts.shortmovie}</NavLink>
            </li>
            <li>
              <NavLink to="/print">{selectedTexts.print}</NavLink>
            </li>
            <li>
              <NavLink to="/contact">{selectedTexts.contact}</NavLink>
            </li>
            <li className="lang">
              <Lang onChnageLnag={onChnageLnag} />
            </li>
          </ul>

          {/* CV */}
          <ul className="navCV">
            <li>
              <NavLink to="/">Patreon</NavLink>
            </li>
            <li>
              <NavLink to="/">Log in</NavLink>
            </li>
          </ul>
        </nav>

        <nav className="spMenu">
          <h3>Menu</h3>
          <button
            onClick={() => this.onSpMenuHandle()}
            className={this.getSpMenuClasses()}
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
