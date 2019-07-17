import React, { Component } from "react";
import { connect } from 'react-redux';

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
    return (
      <div className='user-list'>
        <div className="container">
            <Button className="mt-3 mb-3">Add User</Button>
            <div className="card-wrapper">
            <UserItem />
            <UserItem />
            </div>
        </div>
      </div>

    );
  }
}



export default connect()(UserList);
