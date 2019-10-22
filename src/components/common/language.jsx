import React from "react";
import "./css/language.styl";

const Lang = ({ onChnageLnag }) => {
  return (
    <>
      <div className="lang">
        <span onClick={() => onChnageLnag("jp")}>JP</span> /{" "}
        <span onClick={() => onChnageLnag("en")}>EN</span>
      </div>
    </>
  );
};

export default Lang;
