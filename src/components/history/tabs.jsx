import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import "./css/tabs.styl";
import { getTabs } from "./data/tabs";
import { getActive } from "../common/getActiveClass";

class Tab extends Component {
  state = {};

  render() {
    const { press, exhibition, award } = getTabs();
    const { lang, tabSelect, onHandleTab } = this.props;
    return (
      <ul className="historyTabs">
        <li>
          <a
            href="#j"
            onClick={() => onHandleTab("press")}
            className={getActive(tabSelect, "press")}
          >
            {press[lang]}
          </a>
        </li>
        <li>
          <a
            href="#j"
            onClick={() => onHandleTab("exhibition")}
            className={getActive(tabSelect, "exhibition")}
          >
            {exhibition[lang]}
          </a>
        </li>
        <li>
          <a
            href="#j"
            onClick={() => onHandleTab("award")}
            className={getActive(tabSelect, "award")}
          >
            {award[lang]}
          </a>
        </li>
      </ul>
    );
  }
}

export default Tab;
