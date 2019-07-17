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
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(userActions.fetchUsers());
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
          <Button className="mt-3 mb-3" onClick={this.onAdd}>Add User</Button>
          <div className="card-wrapper">
            {map(users, user => (
              <UserItem
                data={user}
                key={user.id}
                onEdit={this.onEdit}
                onDelete={this.onDelete}
              />
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

UserList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  users: PropTypes.arrayOf(object)
};
