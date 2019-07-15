import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Form,
  Input,
  FormGroup,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

import * as modalActions from './duck/actions';
import * as messagesActions from '../duck/actions/messages.actions';

class UserModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userId !== this.props.userId && nextProps.userId !== '') {
      const user = this.props.messages.find(item => item.id === nextProps.userId);
      console.log(user);
      this.setState({
        text: user.message
      });
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const { dispatch, userId } = this.props;
    const { text } = this.state;


    dispatch(messagesActions.updateMessage(userId, text));
    dispatch(modalActions.dropCurrentUserId());
    dispatch(modalActions.hideModal());
    this.setState({
      text: ''
    });
}

  handleChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { text } = this.state;
    const { isShown } = this.props;
    
    return (
      <Modal isOpen={isShown}>
        <ModalHeader>Edit message</ModalHeader>
        <Form className="message-change-input">
          <ModalBody>
            <FormGroup>
              <Input
                type="textarea"
                name="text"
                onChange={this.handleChange}
                value={text}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.onSubmit} color="primary">Save Changes</Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  const { messages } = state.chat;
  const { isShown, userId } = state.modal;

  return { messages, isShown, userId };
};

export default connect(mapStateToProps)(UserModal);
