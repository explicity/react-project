import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import moment from 'moment';

import { Button, Form, FormGroup, Input } from 'reactstrap';

import './messageInput.scss';

class MessageInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      error: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const { message } = this.state;
    if (!this.isFormValid()) {
      this.setState({ error: 'Please type a message!' });
      return;
    }

    this.setState({
      error: ''
    });

    const data = {
      id: uuidv4(),
      created_at: `${moment().format('YYYY-MM-DD HH:mm:ss')}`,
      message,
      currentUser: true
    };

    this.props.addMessage(data);
  
    this.setState({
      message: ''
    });
  }

  handleChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  }

  isFormValid() {
    const { message } = this.state;
    return message !== '';
  }

  renderError() {
    const { error } = this.state;
    return error ? <div className="alert alert-danger">{error}</div> : null;
  }

  render() {
    const { message } = this.state;

    return (
      <Form onSubmit={this.onSubmit} className="message-input">
        <FormGroup>
          <Input
            type="textarea"
            name="message"
            onChange={this.handleChange}
            value={message}
          />
        </FormGroup>
        {this.renderError()}
        <Button>Send</Button>
      </Form>
    );
  }
}

export default MessageInput;

MessageInput.propTypes = {
  addMessage: PropTypes.func
};
