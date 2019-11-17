import React, { Component } from "react";
import { getStatement, getComments } from "./data/statement";
import "./css/statement.styl";
import downArrow from "./imgs/down-arrow.svg";

class Statement extends Component {
  state = {
    statementOpen: false
  };

  handleStatement = () => {
    const currentState = this.state.statementOpen;
    this.setState({ statementOpen: !currentState });
  };

  render() {
    const statement = getStatement();
    const comments = getComments();
    const { lang } = this.props;

    return (
      <>
        <section
          className={`statement ${this.state.statementOpen ? "open" : ""}`}
        >
          <p>{statement[lang]}</p>
          <div className="cover"></div>
          <img onClick={this.handleStatement} src={downArrow} alt="" />
        </section>
        <section className="comments">
          {comments.map(comment => (
            <div key={comment._id} className="cardWrap">
              <div className="card">
                <div className="comment">{comment[lang]}</div>
                <figure className={"avatar " + comment.avatarName}></figure>
                <div className="nameWrap">
                  <p className="name">{comment.name[lang]}</p>
                  <p className="jobTitle">{comment.jobTitle[lang]}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </>
    );
  }
}

export default Statement;
