import React from "react";
import { NavLink } from "react-router-dom";
import "./css/tabs.styl";
import { getTabs } from "./data/tabs";

const Tab = ({ lang }) => {
  const { press, exhibition, award } = getTabs();

  return (
    <ul className="historyTabs">
      <li>
        <NavLink to="/history/press">{press[lang]}</NavLink>
      </li>
      <li>
        <NavLink to="/history/exhibition">{exhibition[lang]}</NavLink>
      </li>
      <li>
        <NavLink to="/history/award">{award[lang]}</NavLink>
      </li>
    </ul>
  );
};

export default Tab;
