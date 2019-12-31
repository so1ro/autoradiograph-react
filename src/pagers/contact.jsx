import "./css/contact.styl";
import React, { Component } from "react";
import axios from "axios";
import Joi from "joi-browser";
import { inputParts, afterSentMessage } from "./data/contact";

class Contact extends Component {
  state = {
    sender: "Autoradiograph Contact Form",
    // from: "Autoradiograph Contact Form",
    inputs: {
      name: "",
      email: "",
      title: "",
      message: ""
    },
    errors: {},
    isSending: false,
    isSent: false,
    failSending: false
  };

  handleChange = ({ currentTarget: input }) => {
    //validation
    const { errors } = this.state;
    const errorMessage = this.validateProperties(input);
    errors[input.id] = errorMessage;

    //each inputs to state
    const { inputs } = this.state;
    inputs[input.id] = input.value;
    this.setState({ inputs: inputs });

    // Restore mail form state
    let { isSent, failSending } = this.state;
    isSent = false;
    failSending = false;
    this.setState({ isSent, failSending });
  };

  schema = {
    name: Joi.string()
      .trim()
      .required()
      .label(" Name "),
    email: Joi.string()
      .trim()
      .email()
      .required()
      .label(" Email "),
    title: Joi.string()
      .trim()
      .required()
      .label(" Title "),
    message: Joi.string()
      .trim()
      .required()
      .label(" Message ")
  };

  handleSubmit(e) {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.setState({ isSending: true });
    axios({
      method: "POST",
      url: "/contact/send", // /contact/send, http://localhost:5000/contact/send
      data: this.state.inputs
    }).then(response => {
      if (response.data.status === "success") {
        this.setState({ isSending: false, isSent: true });
        this.resetForm();
      } else if (response.data.status === "fail") {
        this.setState({ isSending: false, failSending: true });
      }
    });
  }

  resetForm() {
    this.setState({ inputs: { name: "", email: "", title: "", message: "" } });
  }

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.inputs, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperties = ({ id, value }) => {
    const obj = { [id]: value };
    const schema = { [id]: this.schema[id] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  render() {
    const { errors, isSending, isSent, failSending } = this.state;
    const { lang } = this.props;
    return (
      <section className="contact component">
        <h2>Contact</h2>
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          {inputParts.map(part => (
            <div className="form-group" key={part._id}>
              <label htmlFor={part.id}>{part.label[lang]}</label>
              {part.tag === "input" && (
                <input
                  autoFocus={part.autoFocus && "autoFocus"}
                  type={part.type}
                  id={part.id}
                  value={this.state.inputs[part.id]}
                  onChange={this.handleChange}
                />
              )}
              {part.tag === "textarea" && (
                <textarea
                  autoFocus={part.autoFocus && "autoFocus"}
                  type={part.type}
                  id={part.id}
                  value={this.state.inputs[part.id]}
                  onChange={this.handleChange}
                  rows={part.row}
                />
              )}
              {errors[part.id] && (
                <div className="error">{errors[part.id]}</div>
              )}
            </div>
          ))}

          <div className="buttonWrap">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={this.validate()}
            >
              Submit
            </button>
            {/* Sending spinner */}
            {isSending && (
              <div class="la-ball-scale-multiple">
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </div>
          {isSent && (
            <div className="isSent">
              &#10003; {afterSentMessage.success[lang]}
            </div>
          )}
          {failSending && (
            <div className="failSending">{afterSentMessage.fail[lang]}</div>
          )}
        </form>
      </section>
    );
  }
}

export default Contact;
