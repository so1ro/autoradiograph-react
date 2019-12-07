import React, { Component } from "react";
import { getPressList } from "./data/press";
import { Picture } from "react-responsive-picture";
import { getJpClass } from "../../components/common/getJpClass.js";
import { getActive } from "../../components/common/getActiveClass";

class Press extends Component {
  state = { pressList: [...getPressList()] };

  render() {
    const pressList = this.state.pressList;
    const { lang, tabSelect } = this.props;

    return (
      <ul className={"press" + getActive(tabSelect, "press")}>
        {pressList.map(press => (
          <li key={press._id}>
            <div>
              <Picture src={press.imgUrl} alt={press.title} />
              <span className={"caption" + getJpClass(lang)}>
                {press.title[lang]}{" "}
                <span className="date">( {press.date} )</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
export default Press;
