import React, { Component } from "react";
import {
  /*  BrowserRouter as Router, Switch, Route, */ Link,
} from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);
  }

  //handle change
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  //handle login

  // Main
  render() {
    return (
      <div className="homeLinks">
        <div className="account-login">
          <div className="login-form">
            <Link to="/add">Add New ePHI</Link>
            <Link to="/view">View ePHI</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
