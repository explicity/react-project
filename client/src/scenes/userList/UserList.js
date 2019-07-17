import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';

import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from 'reactstrap';
import UserItem from './UserItem';
import * as usersActions from './duck/actions';

import './userList.scss';
class UserList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(usersActions.fetchUsers());
  }

  render() {
    const { users, loading, error } = this.props;

    if (error) {
      return <div className="error-wrapper">Error! {error}</div>;
    }

    if (loading) {
      return (
        <div className="loading-panel">
          <CircularProgress color="primary" style={{ height: 80, width: 80 }} />
          <p className="mt-3">Loading</p>
        </div>
      );
    }

    return (
      <div className="user-list">
        <div className="container">
          <Button className="mt-3 mb-3">Add User</Button>
          <div className="card-wrapper">
            {map(users, user => (
              <UserItem data={user} key={user.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { users, loading, error } = state.users;

  return { users, loading, error };
};

export default connect(mapStateToProps)(UserList);
