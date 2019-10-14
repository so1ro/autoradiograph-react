import React, { Component } from "react";
import "./css/press.styl";
import { getPressList } from "./data/press";
import { Picture } from "react-responsive-picture";

class Press extends Component {
  state = { pressList: [] };

  componentDidMount() {
    this.setState({ pressList: getPressList() });
  }

  render() {
    const pressList = this.state.pressList;
    return (
      <ul className="press">
        {pressList.map(press => (
          <li key={press._id}>
            <div>
              <Picture src={press.imgUrl} alt={press.title} />
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
