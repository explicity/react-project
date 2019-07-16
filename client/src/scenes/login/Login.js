import React, { Component } from "react";
import { connect } from "react-redux";

import { loginUserAction } from "./duck/actions";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import "./styles.scss";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { username, password } = this.state;
    const { dispatch } = this.props;
    dispatch(loginUserAction({ username, password }));
  }

  render() {
    const { username, password } = this.state;

    return (
      <div className="login-page">
        <div className="container">
          <h2 className="mb-3">Login</h2>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="login-username">Username</Label>
              <Input
                name="username"
                id="login-username"
                placeholder="Type your username"
                value={username}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="login-password">Password</Label>
              <Input
                type="password"
                name="password"
                id="login-password"
                placeholder="Type your password"
                value={password}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
