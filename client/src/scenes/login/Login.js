import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import CircularProgress from '@material-ui/core/CircularProgress';
import { loginUserAction } from './duck/actions';

import './styles.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
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
    const { user, loading, error, isSuccess } = this.props;
    console.log(isSuccess);

    if (isSuccess) {
      return user.role === 'Admin' ? (
          <Redirect to="/users" />
      ) : (
          <Redirect to="/chat" />
      );
    }

    return (
      <div className="login-page">
        <div className="container">
          <h2 className="mb-3">Login</h2>
          {error && <div className="alert alert-danger">{error}</div>}
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
            <Button disabled={loading} color="primary" className="login-submit">
              {loading ? (
                <div className="loading">
                  <CircularProgress
                    color="primary"
                    style={{ height: 20, width: 20 }}
                  />
                </div>
              ) : (
                'Submit'
              )}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user, loading, error, isSuccess } = state.login;

  return { user, loading, error, isSuccess };
};

export default connect(mapStateToProps)(Login);
