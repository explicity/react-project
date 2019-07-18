import React, { Component } from 'react';
import { connect } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import * as userActions from '../userList/duck/actions';
import * as editUserActions from './duck/actions';

import './userEditor.scss';

class UserEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordHidden: true,
      userData: {
        username: '',
        email: '',
        password: '',
        id: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    if (id) {
      const { dispatch } = this.props;
      dispatch(editUserActions.fetchUser(id));
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const { userData } = this.state;
    const { dispatch, history } = this.props;

    if (userData.id) {
      dispatch(userActions.updateUser(id, userData));
    } else {
      dispatch(userActions.addUser(userData));
    }

    this.setState({
      userData: {
        username: '',
        email: '',
        password: '',
        id: ''
      }
    });
    history.push('/');
  }

  onCancel(event) {
    event.preventDefault();
    this.setState({
      userData: {
        username: '',
        email: '',
        password: '',
        id: ''
      }
    });
    const { history } = this.props;
    history.push('/');
  }

  UNSAFE_componentWillReceiveProps(nextProps, prevState) {
    if (nextProps.userData.id !== prevState.id && nextProps.match.params.id) {
      const { username, email, password, id } = nextProps.userData;
      this.setState({
        userData: {
          username,
          email,
          password,
          id
        }
      });

      return true;
    }

    return null;
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value
      }
    });
  }

  toggleShow() {
    this.setState({ passwordHidden: !this.state.passwordHidden });
  }

  render() {
    const { passwordHidden, userData } = this.state;
    const { loading, error } = this.props;

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
                type={passwordHidden ? 'password' : 'text'}
                name="password"
                id="password"
                placeholder="password"
                defaultValue={userData.password}
                onChange={this.handleChange}
              />
              <Label for="password">Password</Label>
              <Button onClick={this.toggleShow} className="show-password">
                {passwordHidden ? <FaEye /> : <FaEyeSlash />}
              </Button>
            </FormGroup>
            <Button onClick={this.onCancel} color="secondary" className="mr-2">
              Cancel
            </Button>
            <Button onClick={this.onSubmit} color="primary">
              Save Changes
            </Button>
            {loading && (
              <div className="loading-pannel-small">
                <CircularProgress
                  color="primary"
                  style={{ height: 35, width: 35 }}
                />
              </div>
            )}
            {error && (
              <div className="alert alert-danger">Something went wrong</div>
            )}
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { userData, loading, error } = state.editUser;

  return { userData, loading, error };
};

export default connect(mapStateToProps)(UserEditor);
