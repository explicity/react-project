import React from 'react';

import { map } from 'lodash';

import Message from './Message';

const MessageList = (data) => {
  const { messages } = data;

  const messagesList = map(messages, item => (
    <li key={item.id} className="message-list-item">
      <Message data={item} />
    </li>
  ));

  return (
    <ul className="message-list">
      {messages.length !== 0 ? (
        messagesList
      ) : (
        <p>Be the first one to add a comment!</p>
      )}
    </ul>
  );
};

export default MessageList;
