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
      password: '',
      id: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    if (id) {
      const { dispatch } = this.props;
      dispatch(editUserActions.fetchUser(id));
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps, prevState) {
    if (nextProps.userData.id !== prevState.id && nextProps.match.params.id) {
      const { userData } = nextProps;
      this.setState({
        username: userData.username,
        email: userData.email,
        password: userData.password,
        id: userData.id
      });

       return true;
    } else {
      return null;
    }
  }


  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onCancel() {
    this.setState({
      username: '',
      email: '',
      password: '',
      id: ''
    });
    const { history } = this.props;
    history.push('/');
}

  render() {
    const { userData, loading, error } = this.props;
    const { username, email, password } = this.state;
    console.log('userData: ', userData);
    console.log(this.state);

    return (
      <div className="modal-edit">
        <div className="container">
          <Form>
            <FormGroup className="form-label-group">
              <Input
                name="username"
                id="username"
                placeholder="Username"
                defaultValue={username}
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
                defaultValue={email}
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
                defaultValue={password}
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
