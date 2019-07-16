import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import moment from 'moment';

import Message from '../Message';
import CurrentUserMessage from '../CurrentUserMessage';

import './messageList.scss';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.getSplitDivider = this.getSplitDivider.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  getSplitDivider(index) {
    const { messages } = this.props;
    const firstDate = moment(messages[index].created_at);

    if (index !== 0) {
      const secondDate = moment(messages[index - 1].created_at);
      if (!firstDate.isSame(secondDate, 'day')) {
        return (
          <div className="time-divider">{moment(firstDate).fromNow()}</div>
        );
      }
    } else {
      return <div className="time-divider">{moment(firstDate).fromNow()}</div>;
    }
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { messages, removeItem, likeItem, editItem } = this.props;

    const messagesList = map(messages, (item, index) => {
      return (
        <React.Fragment key={item.id}>
          {this.getSplitDivider(index)}
          {item.currentUser ? (
            <CurrentUserMessage
              data={item}
              removeItem={removeItem}
              editItem={editItem}
            />
          ) : (
            <Message data={item} likeItem={likeItem} />
          )}
        </React.Fragment>
      );
    });

    return (
      <React.Fragment>
        {messages.length !== 0 ? (
          <div className="message-list">
            {messagesList}
            <div
              style={{ float: 'left', clear: 'both', height: 1 }}
              ref={el => (
                this.messagesEnd = el
              )}
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

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  removeItem: PropTypes.func,
  likeItem: PropTypes.func,
  editItem: PropTypes.func,
}
