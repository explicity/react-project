import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FaRegThumbsUp, FaRegEdit, FaTrashAlt } from 'react-icons/fa';

import './message.scss';

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovering: false
    };

    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.likeMessage = this.likeMessage.bind(this);
    this.editMessage = this.editMessage.bind(this);
  }

  handleMouseHover() {
    this.setState({
      isHovering: !this.state.isHovering
    });
  }

  likeMessage(id) {
    const { likeItem, data } = this.props;
    const { currentUser } = data;

    if (!currentUser) {
      likeItem(id);
    }
  }

  editMessage(id) {
    console.log('hi');

    this.props.editItem(id);
    
  }

  render() {
    const { isHovering } = this.state;
    const { data } = this.props;
    const { id, avatar, created_at, message, marked_like, currentUser } = data;

    return (
      <div
        className={`message ${currentUser && 'current-user-message'}`}
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
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
          <div className="metadata">
            <p>{created_at}</p>
          </div>
          <p className="text">{message}</p>
          <div className="actions">
            <button
              type="button"
              className={`btn-action btn ${marked_like ? 'liked' : null}`}
              onClick={() => this.likeMessage(id)}
            >
              <FaRegThumbsUp />
            </button>
            {currentUser && (
              <button
                type="button"
                className="btn-action btn"
                onClick={() => this.props.removeItem(id)}
              >
                <FaTrashAlt />
              </button>
            )}
            {isHovering && (
              <button
                type="button"
                className="btn-action btn"
                onClick={() => this.editMessage(id)}
              >
                <FaRegEdit />
              </button>
            )}
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
    marked_like: PropTypes.bool,
    avatar: PropTypes.string
  })
};
