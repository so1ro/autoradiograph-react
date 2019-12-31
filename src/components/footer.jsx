import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./css/footer.styl";
import iconFacebook from "./imgs/facebook.svg";
import iconContact from "./imgs/contact.svg";
import { texts } from "./data/nav-text";
import Lang from "./common/language";
import { getJpClass } from "./common/getJpClass";
import { scrollTop } from "./common/scrollTop";

class Footer extends Component {
  state = {};

  getTitle(path, lang) {
    return lang === "jp" ? <img src={path} alt="放射線像" /> : path;
  }

  render() {
    const { lang, onChnageLnag } = this.props;
    const selectedTexts = { ...texts[lang] };

    return (
      <footer>
        <nav className="fNav">
          {/* Links */}
          <ul className={"navLink" + getJpClass(lang)}>
            <li>
              <NavLink to="/" onClick={scrollTop} exact>
                {selectedTexts.top}
              </NavLink>
            </li>
            <li>
              <NavLink onClick={scrollTop} to="/history">
                {selectedTexts.history}
              </NavLink>
            </li>
            <li>
              <NavLink onClick={scrollTop} to="/shortmovie">
                {selectedTexts.shortmovie}
              </NavLink>
            </li>
            {/* <li>
              <NavLink onClick={scrollTop} to="/print">{selectedTexts.print}</NavLink>
            </li> */}
          </ul>

          {/* Icons */}
          <ul className="iconLink">
            <li>
              <a
                href={selectedTexts.facebook}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={iconFacebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <NavLink onClick={scrollTop} to="/contact">
                <img src={iconContact} alt="Contact" />
              </NavLink>
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
        <h1>{this.getTitle(selectedTexts.title, lang)}</h1>
        <Lang onChnageLnag={onChnageLnag} />
      </footer>
    );
  }
}

export default Footer;
