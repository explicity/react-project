import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';

import * as messagesActions from './duck/actions/messages.actions';
import * as modalActions from './Modal/duck/actions';
import { fetchMessages } from './duck/operations';

import Header from './Header';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UserModal from './Modal';

import './chat.scss';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.addMessage = this.addMessage.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.likeItem = this.likeItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMessages());
  }

  getHeaderData() {
    const { messages } = this.props;

    const participants = [...new Set(messages.map(item => item.user))].length;
    const messagesAmount = messages.length;

    return {
      participants,
      messagesAmount,
      lastMessage: messages[messagesAmount - 1].created_at
    };
  }

  addMessage(message) {
    const { dispatch } = this.props;
    dispatch(messagesActions.addMessage(message));
  }

  removeItem(id) {
    const { dispatch } = this.props;
    dispatch(messagesActions.removeMessage(id));
  }

  likeItem(id) {
    const { dispatch } = this.props;
    dispatch(messagesActions.likeMessage(id));
  }

  editItem(id) {
    const { dispatch } = this.props;
    dispatch(modalActions.setCurrentUserId(id));
    dispatch(modalActions.showModal());
  }

  render() {
    const { messages, loading, error } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
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
      <div className="chat">
        <div className="container">
          {/* <Header data={this.getHeaderData()} /> */}
          <MessageList
            messages={messages}
            removeItem={this.removeItem}
            likeItem={this.likeItem}
            editItem={this.editItem}
          />
          <UserModal />
          <MessageInput addMessage={this.addMessage} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { messages, loading, error } = state.chat;

  return { messages, loading, error };
};

export default connect(mapStateToProps)(Chat);

Chat.propTypes = {
  dispatch: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(object),
  loading: PropTypes.bool,
  error: PropTypes.string
};
