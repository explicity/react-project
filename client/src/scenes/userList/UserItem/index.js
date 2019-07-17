import React, { Component } from "react";

import { Card, Button, CardHeader, CardBody, CardText } from "reactstrap";

import "./userItem.scss";

const UserItem = ({ data }) => {
  const { username, email } = data;
  return (
    <Card>
      <CardHeader>{username}</CardHeader>
      <CardBody>
        <CardText className="mb-3">{email}</CardText>
        <Button className="mr-1">Edit</Button>
        <Button>Delete</Button>
      </CardBody>
    </Card>
  );
};

export default UserItem;
