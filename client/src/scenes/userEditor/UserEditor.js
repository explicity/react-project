import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import * as editUserActions from './duck/actions';

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

  componentDidMount() {
    const { id } = this.props.match.params;

    if (id) {
      const { dispatch } = this.props;
      dispatch(editUserActions.fetchUser(id));
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.userData.id !== prevState.id && nextProps.match.params.id) {
      return {
        ...nextProps.userData
      };
    } else {
      return null;
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { userData, loading, error } = this.props;

    return (
      <div className="modal-edit">
        <div className="container">
          <Form>
            <FormGroup className="form-label-group">
              <Input
                name="username"
                id="username"
                placeholder="Username"
                defaultValue={userData.username}
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
                defaultValue={userData.email}
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
                defaultValue={userData.password}
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

const mapStateToProps = state => {
  const { userData, loading, error } = state.editUser;

  return { userData, loading, error };
};

export default connect(mapStateToProps)(UserEditor);
