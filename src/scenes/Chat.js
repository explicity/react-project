import React, { Component } from "react";
import axios from "axios";

import CircularProgress from "@material-ui/core/CircularProgress";

import Header from './components/header/Header';
import MessageList from './components/messageList/MessageList';

import './chat.scss';

class Chat extends Component {
  _isMounted = true;

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true
    };
  }

  componentDidMount() {
    this._isMounted = true;

    axios.get("https://api.myjson.com/bins/1hiqin").then(res => {
      if (this._isMounted) {
        this.setState({
          loading: false,
          data: res.data
        });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
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
              <MessageList messages={data} />
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default Chat;
