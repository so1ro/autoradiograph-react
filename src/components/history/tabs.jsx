import React from "react";
import { NavLink } from "react-router-dom";
import "./css/tabs.styl";

const Tab = () => {
  return (
    <ul className="historyTabs">
      <li>
        <NavLink to="/history/press">Press</NavLink>
      </li>
      <li>
        <NavLink to="/history/exhibition">Exhibition</NavLink>
      </li>
      <li>
        <NavLink to="/history/award">Award</NavLink>
      </li>
    </ul>
  );
};

export default Tab;
