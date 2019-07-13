import React, { Component } from "react";
import { map } from "lodash";

import Message from "../Message";
import CurrentUserMessage from "../CurrentUserMessage";

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

    const messagesList = map(messages, item =>
      item.currentUser ? (
        <CurrentUserMessage
          data={item}
          key={item.id}
          removeItem={removeItem}
          editItem={editItem}
        />
      ) : (
        <Message data={item} key={item.id} likeItem={likeItem} />
      )
    );

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
