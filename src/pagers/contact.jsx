import "./css/contact.styl";

import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  state = {
    sender: "Autoradiograph Contact Form",
    // from: "Autoradiograph Contact Form",
    name: "",
    email: "",
    title: "",
    message: "",
    errors: {}
  };

  handleSubmit(e) {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    axios({
      method: "POST",
      url: "/contact/send",
      data: this.state
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
    const errors = {};

    const contents = this.state;
    if (contents.name.trim() === "") errors.name = "Name is required.";
    if (contents.email.trim() === "") errors.email = "Email is required.";
    if (contents.title.trim() === "") errors.title = "Title is required.";
    if (contents.message.trim() === "") errors.message = "Message is required.";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  resetForm() {
    this.setState({ name: "", email: "", title: "", message: "" });
  }

  render() {
    const { errors } = this.state;
    return (
      <section className="contact component">
        <h2>Contact</h2>
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              autoFocus
              type="text"
              className="form-control"
              id="name"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input
              type="title"
              className="form-control"
              id="title"
              aria-describedby="titleHelp"
              value={this.state.title}
              onChange={this.onTitleChange.bind(this)}
            />
            {errors.title && <div className="error">{errors.title}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              rows="5"
              id="message"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
            {errors.message && <div className="error">{errors.message}</div>}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default Contact;
