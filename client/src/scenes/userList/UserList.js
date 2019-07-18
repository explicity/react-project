import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import { map } from 'lodash';

import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from 'reactstrap';
import UserItem from './UserItem';
import * as userActions from './duck/actions';

import './userList.scss';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onAdd = this.onAdd.bind(this);

    this.state = {
      id: ''
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(userActions.fetchUsers());

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.setState({
      id: currentUser.id
    });
  }

  onEdit(id) {
    const { history } = this.props;
    history.push(`/user/${id}`);
  }

  onDelete(id) {
    const { dispatch } = this.props;
    dispatch(userActions.deleteUser(id));
  }

  onAdd() {
    const { history } = this.props;
    history.push('/user');
  }

  render() {
    const { id } = this.state;
    const { users, loading, error } = this.props;

    if (error) {
      return <div className="error-wrapper">Error! {error}</div>;
    }
    return (
      <div className="user-list">
        <div className="container">
          <Button className="mt-3 mb-3 mr-3" onClick={this.onAdd}>
            Add User
          </Button>
          {loading && (
            <div className="loading-pannel-small">
              <CircularProgress
                color="primary"
                style={{ height: 35, width: 35 }}
              />
            </div>
          )}
          <div className="card-wrapper">
            {map(
              users,
              user =>
                user.id !== id && (
                  <UserItem
                    data={user}
                    key={user.id}
                    onEdit={this.onEdit}
                    onDelete={this.onDelete}
                  />
                )
            )}
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

UserList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  users: PropTypes.arrayOf(object)
};
