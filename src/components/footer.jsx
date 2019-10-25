import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./css/footer.styl";
import iconFacebook from "./imgs/facebook.svg";
import iconContact from "./imgs/contact.svg";
import { getTexts } from "./data/footer-text";
import Lang from "./common/language";
import { getJpClass } from "./common/getJpClass";

class Footer extends Component {
  state = {};

  getTitle(path, lang) {
    return lang === "jp" ? <img src={path} alt="放射線像" /> : path;
  }

  render() {
    const { lang, onChnageLnag } = this.props;
    const texts = getTexts();
    const selectedTexts = { ...texts[lang] };

    return (
      <footer>
        <nav className="fNav">
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
          </ul>

          {/* Icons */}
          <ul className="iconLink">
            <li>
              <NavLink to="/">
                <img src={iconFacebook} alt="Facebook" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <img src={iconContact} alt="Contact" />
              </NavLink>
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
        <h1>{this.getTitle(selectedTexts.title, lang)}</h1>
        <Lang onChnageLnag={onChnageLnag} />
      </footer>
    );
  }
}

export default Footer;
