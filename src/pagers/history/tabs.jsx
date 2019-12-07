import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import "./css/tabs.styl";
import { getTabs } from "./data/tabs";
import { getActive } from "../../components/common/getActiveClass";

class Tab extends Component {
  state = {};

  render() {
    const { press, exhibition, award } = getTabs();
    const { lang, tabSelect, onHandleTab } = this.props;
    return (
      <ul className="historyTabs">
        <li>
          <span
            onClick={() => onHandleTab("press")}
            className={getActive(tabSelect, "press")}
          >
            {press[lang]}
          </span>
        </li>
        <li>
          <span
            onClick={() => onHandleTab("exhibition")}
            className={getActive(tabSelect, "exhibition")}
          >
            {exhibition[lang]}
          </span>
        </li>
        <li>
          <span
            onClick={() => onHandleTab("award")}
            className={getActive(tabSelect, "award")}
          >
            {award[lang]}
          </span>
        </li>
      </ul>
    );
  }
}

export default Tab;
