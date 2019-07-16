import React, { Component } from "react";

import { Button } from 'reactstrap';
import UserItem from './UserItem';

import './userList.scss';
class UserList extends Component {
  componentDidMount() {
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

export default UserList;
