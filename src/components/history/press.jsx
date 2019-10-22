import React, { Component } from "react";
import "./css/press.styl";
import { getPressList } from "./data/press";
import { Picture } from "react-responsive-picture";
import { getJpClass } from "../../components/common/getJpClass.js";

class Press extends Component {
  state = { pressList: [...getPressList()] };

  render() {
    const pressList = this.state.pressList;
    const lang = this.props.lang;

    return (
      <ul className="press">
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
