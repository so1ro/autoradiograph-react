import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/footer.styl";
import iconFacebook from "./imgs/facebook.svg";
import iconContact from "./imgs/contact.svg";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <nav className="fNav">
          {/* Links */}
          <ul className="navLink">
            <li>
              <NavLink to="/" exact>
                Top
              </NavLink>
            </li>
            <li>
              <NavLink to="/history">History</NavLink>
            </li>
            <li>
              <NavLink to="/shortmovie">Short movie</NavLink>
            </li>
            <li>
              <NavLink to="/">Print</NavLink>
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
              <NavLink to="/">
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
        <h1>Autoradiograph</h1>
        <div className="lang">JP / EN</div>
      </footer>
    );
  }
}

export default Footer;
