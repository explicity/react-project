import React, { Component } from "react";
import axios from "axios";

import CircularProgress from "@material-ui/core/CircularProgress";

import Header from "./components/Header";
import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";

import "./chat.scss";

class Chat extends Component {
  _isMounted = true;

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true
    };

    this.addMessage = this.addMessage.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.likeItem = this.likeItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;

    axios
      .get("https://api.myjson.com/bins/1hiqin")
      .then(res => {
        if (this._isMounted) {
          this.setState({
            loading: false,
            data: res.data
          });
        }
      })
      .catch(err => {
        this.setState({
          loading: false
        });
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  addMessage(message) {
    this.setState({
      data: [...this.state.data, message]
    });
  }

  removeItem(id) {
    const { data } = this.state;
    const messages = data.filter(message => message.id !== id);

    this.setState({
      data: messages
    });
  }

  likeItem(id) {
    const { data } = this.state;

    let isLiked = !this.ifAlreadyLiked(id);
    const messages = data.map(message =>
      message.id === id ? { ...message, isLiked } : message
    );
    this.setState({
      data: messages
    });
  }

  editItem(id, text) {
    const { data } = this.state;

    const messages = data.map(item =>
      item.id === id ? { ...item, message: text } : item
    );
    
    this.setState({
      data: messages
    });
  }

  ifAlreadyLiked(id) {
    const { data } = this.state;
    const message = data.filter(message => message.id === id);
    return message[0].isLiked;
  }

  render() {
    const { data, loading } = this.state;
    
    return (
      <div className="chat">
        <div className="container">
          {loading ? (
            <div className="loading-panel">
              <CircularProgress
                color="primary"
                style={{ height: 80, width: 80 }}
              />
              <p className="mt-3">Loading</p>
            </div>
          ) : (
            <React.Fragment>
              <Header />
              <MessageList
                messages={data}
                removeItem={this.removeItem}
                likeItem={this.likeItem}
                editItem={this.editItem}
              />
              <MessageInput addMessage={this.addMessage} />
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default Chat;
