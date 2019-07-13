import React, { Component } from "react";

import { map } from "lodash";

import Message from "./Message";

import "./messageList.scss";

class MessageList extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };


  render() {
    const { messages, removeItem, likeItem, editItem } = this.props;

    const messagesList = map(messages, (item) => (
        <Message data={item} key={item.id} removeItem={removeItem} likeItem={likeItem} editItem={editItem} />
    ));

    return (
      <React.Fragment>
        {messages.length !== 0 ? (
          <div className="message-list">
            {messagesList}
            <div
              style={{ float: "left", clear: "both", height: 1 }}
              ref={el => {
                this.messagesEnd = el;
              }}
            />
          </div>
        ) : (
          <p>Be the first one to add a comment!</p>
        )}
      </React.Fragment>
    );
  }
}

export default MessageList;
