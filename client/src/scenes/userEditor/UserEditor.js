import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './userEditor.scss';

class UserEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password, email } = this.state;
    console.log('this.state: ', this.state);

    return (
      <div className="modal-edit">
        <div className="container">
          <Form>
            <FormGroup className="form-label-group">
              <Input
                name="username"
                id="username"
                placeholder="Username"
                value={username}
                onChange={this.handleChange}
              />
              <Label for="username">Username</Label>
            </FormGroup>
            <FormGroup className="form-label-group">
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
              <Label for="email">Email</Label>
            </FormGroup>
            <FormGroup className="form-label-group mb-3">
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={this.handleChange}
              />
              <Label for="password">Password</Label>
            </FormGroup>

            <Button onClick={this.onCancel} color="secondary" className="mr-2">
              Cancel
            </Button>
            <Button onClick={this.onSubmit} color="primary">
              Save Changes
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default UserEditor;
