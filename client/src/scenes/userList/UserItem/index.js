import React from 'react';
import PropTypes from 'prop-types';

import { Card, Button, CardHeader, CardBody, CardText } from 'reactstrap';

import './userItem.scss';

const UserItem = ({ data, onEdit, onDelete }) => {
  const { username, email, id } = data;
  return (
    <Card>
      <CardHeader>{username}</CardHeader>
      <CardBody>
        <CardText className="mb-3">{email}</CardText>
        <Button className="mr-1" onClick={() => onEdit(id)}>Edit</Button>
        <Button onClick={() => onDelete(id)}>Delete</Button>
      </CardBody>
    </Card>
  );
};

export default UserItem;

UserItem.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  data: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string
  })
};
