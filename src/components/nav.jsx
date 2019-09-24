import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/nav.styl";

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

  render() {
    return (
      <React.Fragment>
        <nav className="gNav">
          {/* Logo */}
          <h1>
            <Link to="/">Autoradiograph</Link>
          </h1>

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
            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/">JP</NavLink>
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
