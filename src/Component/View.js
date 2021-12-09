import React, { Component } from "react";
import axios from "axios";
import settings from "../seeting";
let { url } = settings;
class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: false,
    };
  }

  onSearch = async (e) => {
    e.preventDefault();
    this.setState({ result: false });
    let result = await axios.put(url + "api/view", {
      id: this.state.id,
    });
    if (result) {
      this.setState({ result: result["data"] });
      if (this.state.result.success) {
        this.setState({ info: this.state.result.info });
      }
    }
  };

  handleInputChange = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  handleUpdateInputChange = (e) => {
    this.setState({
      info: { ...this.state.info, [e.target.name]: e.target.value },
    });
  };

  onClickUpdate = (id) => {
    this.setState({ isUpdateMode: true });
  };

  onSave = async () => {
    let { info } = this.state;
    info["id"] = this.state.id;
    let response = await axios.put(url + "api/update", info);

    if (response) {
      let result = response["data"];

      this.setState({ isUpdateMode: false });
      if (result && result.success) {
        alert("Data was updaed successfully");
      }
    }
  };
  // Main
  render() {
    let { result, isUpdateMode, info } = this.state;

    return (
      <div className="login">
        <a className="go-back" href="/">
          &larr;Go Back
        </a>
        <div className="account-login">
          <h1>View Information</h1>
          <form onSubmit={this.onSearch} className="login-form">
            <input
              type="text"
              name="id"
              onChange={this.handleInputChange}
              placeholder="Please Enter Your Id"
            />

            <input className="btn" type="submit" value="Search" />

            {result && result.success && info ? (
              isUpdateMode ? (
                <div>
                  <p>National ID: {this.state.id}</p>
                  <input
                    type="text"
                    name="name"
                    placeholder={info["name"]}
                    onChange={(e) => this.handleUpdateInputChange(e)}
                  />
                  <p>Birth Date: {info["birthdate"]}</p>
                  <input
                    type="date"
                    name="birthdate"
                    placeholder={info["birthdate"]}
                    value={this.state.birthdate}
                    onChange={(e) => this.handleUpdateInputChange(e)}
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder={info["address"]}
                    onChange={(e) => this.handleUpdateInputChange(e)}
                  />

                  <input
                    type="tel"
                    name="phonenumber"
                    placeholder={info["phonenumber"]}
                    onChange={(e) => this.handleUpdateInputChange(e)}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={info["email"]}
                    onChange={(e) => this.handleUpdateInputChange(e)}
                  />
                  <button
                    className="btn"
                    onClick={() => this.onSave(this.state.id)}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div>
                  <div className="info">
                    <p>National ID: {this.state.id}</p>
                    <p>Full Name: {info["name"]}</p>
                    <p>Birth Date: {info["birthdate"]}</p>
                    <p>Address: {info["address"]}</p>

                    <p>Phone Number: {info["phonenumber"]}</p>
                    <p>Email: {info["email"]}</p>
                  </div>
                  <button
                    className="btn"
                    onClick={() => this.onClickUpdate(this.state.id)}
                  >
                    Update
                  </button>
                </div>
              )
            ) : result && !result.success ? (
              <h4 style={{ color: "red" }}>{result.error}</h4>
            ) : null}
          </form>
        </div>{" "}
      </div>
    );
  }
}

export default View;
