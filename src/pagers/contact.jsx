import "./css/contact.styl";
import React, { Component } from "react";
import axios from "axios";
import Joi from "joi-browser";
import { inputParts } from "./data/contact";

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
    errors: {}
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

    axios({
      method: "POST",
      url: "/contact/send",
      data: this.state.inputs
    }).then(response => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
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

  handleChange = ({ currentTarget: input }) => {
    const { errors } = this.state;
    const errorMessage = this.validateProperties(input);
    errors[input.id] = errorMessage;

    const { inputs } = this.state;
    inputs[input.id] = input.value;
    this.setState({ inputs: inputs });
  };

  render() {
    const { errors } = this.state;
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

          <button
            type="submit"
            className="btn btn-primary"
            disabled={this.validate()}
          >
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export default Contact;
