import React from "react";

import { FaRegThumbsUp } from "react-icons/fa";

import "./message.scss";

const Message = (props) => {
  const { avatar, created_at, message, user } = props.data;

  return (
    <div className="message">
      <a href="#" className="avatar">
        <img src={avatar} alt="user-avatar" style={{ height: 30, width: 30 }} />
      </a>
      <div className="content">
        <a href="#" className="author">
          {user}
        </a>
        <div className="metadata">
          <p>{created_at}</p>
        </div>
        <p className="text">{message}</p>
        <div className="actions">
          <button type="button" className="btn-action btn">
            <FaRegThumbsUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
