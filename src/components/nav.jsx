import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/nav.styl";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav className="gNav">
        <h1>
          <Link to="/">Autoradiograph</Link>
        </h1>
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
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/">JP / EN</NavLink>
          </li>
        </ul>
        <ul className="navCV">
          <li>
            <NavLink to="/">Patreon</NavLink>
          </li>
          <li>
            <NavLink to="/">Log in</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
