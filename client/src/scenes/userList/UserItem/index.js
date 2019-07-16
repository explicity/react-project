import React, { Component } from "react";

import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardText
} from "reactstrap";

import './userItem.scss';

class UserItem extends Component {
  render() {
    return (
      <Card>
        <CardHeader>Admin</CardHeader>
        <CardBody>
          <CardText className="mb-3">admin@gmail.com</CardText>
          <Button className="mr-1">Edit</Button>
          <Button>Delete</Button>
        </CardBody>
      </Card>
    );
  }
}

export default UserItem;
