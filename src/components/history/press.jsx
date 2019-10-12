import React, { Component } from "react";
import "./css/press.styl";
import { getPressList } from "./data/press";

class Press extends Component {
  state = { pressList: [] };

  componentDidMount() {
    this.setState({ pressList: getPressList() });
  }

  render() {
    const pressList = this.state.pressList;
    console.log("pressList:", pressList);
    return (
      <ul className="press">
        {pressList.map(press => (
          <li>
            <div>
              <img src={press.imgUrl} alt={press.title} />
              <span className="caption">
                {press.title} <span className="date">( {press.date} )</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
export default Press;
