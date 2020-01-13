import React from "react";
import { getJpClass } from "./getJpClass";

const Table = ({ lang, items }) => {
  return (
    <ul className="table">
      {items.map(item => (
        <React.Fragment key={item._id}>
          <li className="filed">{item.filed[lang]}</li>
          <li className={"content" + getJpClass(lang)}>{item.content[lang]}</li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Table;
