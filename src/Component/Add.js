import React, { Component } from "react";
import axios from "axios";
import settings from "../seeting";
let { url } = settings;
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  onAdd = async (e) => {
    e.preventDefault();
    console.log(this.state.data);
    let result = await axios.post(url + "api/add", this.state.data);
    if (result) {
      result = result["data"];
      this.setState({ result });
    }
  };

  handleInputChange = (e) => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  };

  // Main
  render() {
    let { result } = this.state;
    return (
      <div className="login">
        <a className="go-back" href="/">
          &larr;Go Back
        </a>
        <div className="account-login">
          <h1>Add Information</h1>
          <form onSubmit={this.onAdd} className="login-form">
            <div className="form-group">
              <input
                type="text"
                name="id"
                onChange={this.handleInputChange}
                placeholder="National ID"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                onChange={this.handleInputChange}
                placeholder="Full Name"
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                name="birthdate"
                onChange={this.handleInputChange}
                placeholder="Birth Date"
              />{" "}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="address"
                onChange={this.handleInputChange}
                placeholder="Address"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                onChange={this.handleInputChange}
                placeholder="Email"
              />
            </div>
            <input className="btn" type="submit" value="Confirm" />
            {result ? (
              result.success ? (
                <p style={{ color: "green" }}>
                  The information was added successfully
                </p>
              ) : (
                <p style={{ color: "red" }}>{result.error}</p>
              )
            ) : null}
          </form>
        </div>
      </div>
    );
    /*  return (
      <div className="addForm">
        <form onSubmit={this.onAdd}>
          <input
            type="text"
            name="id"
            onChange={this.handleInputChange}
            placeholder="National ID"
          />
          <input
            type="text"
            name="name"
            onChange={this.handleInputChange}
            placeholder="Full Name"
          />

          <input
            type="date"
            name="birthdate"
            onChange={this.handleInputChange}
            placeholder="Birth Date"
          />
          <input
            type="text"
            name="address"
            onChange={this.handleInputChange}
            placeholder="Address"
          />
          <input
            type="tel"
            name="phonenumber"
            onChange={this.handleInputChange}
            placeholder="Phone Number"
          />

          <input
            type="email"
            name="email"
            onChange={this.handleInputChange}
            placeholder="Email"
          />

          <input
            type="submit"
            value="Confirm"
            style={{
              backgroundColor: "dodgerblue",
              color: "white",
              border: "none",
            }}
          />
        </form>
      </div>
    ); */
  }
}

export default Add;
