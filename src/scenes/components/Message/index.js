import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FaRegThumbsUp } from 'react-icons/fa';

import './message.scss';

class Message extends Component {
  constructor(props) {
    super(props);

    this.likePost = this.likePost.bind(this);
  }

  likePost(id) {
    const { likeItem, data } = this.props;
    const { currentUser } = data;

    if (!currentUser) {
      likeItem(id);
    }
  }

  render() {
    const { data } = this.props;

    const {
      id,
      avatar,
      created_at,
      message,
      isLiked
    } = data;

    return (
      <div className="message">
        <a href="#" className="avatar">
          <img
            src={avatar}
            alt="user-avatar"
            style={{ height: 30, width: 30 }}
          />
        </a>
        <div className="content">
          <div className="metadata">
            <p>{created_at}</p>
          </div>
          <p className="text">{message}</p>
          <div className="actions">
            <button
              type="button"
              className={`btn-action btn ${isLiked ? 'liked' : null}`}
              onClick={() => this.likePost(id)}
            >
              <FaRegThumbsUp />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;

Message.propTypes = {
  likeItem: PropTypes.func,
  data: PropTypes.shape({
    id: PropTypes.string,
    created_at: PropTypes.string,
    message: PropTypes.string,
    currentUser: PropTypes.bool,
    isLiked: PropTypes.bool,
    avatar: PropTypes.string
  }),
};
