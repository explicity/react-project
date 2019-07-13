import React, { Component } from 'react';

import { FaRegThumbsUp, FaTrashAlt, FaRegEdit } from 'react-icons/fa';

import './message.scss';

class Message extends Component {
  constructor(props) {
    super(props);

    this.likePost = this.likePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  likePost(id) {
    const { likeItem, data } = this.props;
    const { currentUser } = data;

    if (!currentUser) {
      likeItem(id);
    }
  }

  deletePost(id) {
    const { removeItem } = this.props;

    removeItem(id);
  }

  render() {
    console.log(this.props);
    const { id, avatar, created_at, message, currentUser, isLiked } = this.props.data;

    return (
      <div className={`message ${currentUser ? 'current-user-message' : ''}`}>
        {!currentUser && (
          <a href="#" className="avatar">
            <img
              src={avatar}
              alt="user-avatar"
              style={{ height: 30, width: 30 }}
            />
          </a>
        )}
        <div className="content">
          {/* <a href="#" className="author">
              {user}
            </a> */}
          <div className="metadata">
            <p>{created_at}</p>
          </div>
          <p className="text">{message}</p>
          <div className="actions">
            <button
              type="button"
              className={`btn-action btn ${isLiked ? "liked": null}`}
              onClick={() => this.likePost(id)}
            >
              <FaRegThumbsUp />
            </button>
            {currentUser && (
              <React.Fragment>
                <button
                  type="button"
                  className="btn-action btn"
                  onClick={() => this.deletePost(id)}
                >
                  <FaTrashAlt />
                </button>
                <button type="button" className="btn-action btn">
                  <FaRegEdit />
                </button>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
