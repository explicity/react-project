import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FaRegThumbsUp, FaTrashAlt, FaRegEdit } from 'react-icons/fa';
import { Form, Input, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CurrentUserMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      text: this.props.data.message
    };

    this.deletePost = this.deletePost.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const { data } = this.props;
    const { id } = data;
    const { text } = this.state;

    this.props.editItem(id, text);
    this.toggle();
  }

  deletePost(id) {
    const { removeItem } = this.props;

    removeItem(id);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { data } = this.props;
    const {
      id,
      created_at,
      message,
    } = data;

    const { modal, text } = this.state;

    return (
      <div className="message current-user-message">
        <div className="content">
          {/* <a href="#" className="author">
              {user}
            </a> */}
          <div className="metadata">
            <p>{created_at}</p>
          </div>
          <p className="text">{message}</p>
          <div className="actions">
            <button type="button" className="btn-action btn">
              <FaRegThumbsUp />
            </button>
            <React.Fragment>
              <button
                type="button"
                className="btn-action btn"
                onClick={() => this.deletePost(id)}
              >
                <FaTrashAlt />
              </button>
              <button
                type="button"
                className="btn-action btn"
                onClick={this.toggle}
              >
                <FaRegEdit />
              </button>
            </React.Fragment>
          </div>
        </div>
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Edit message</ModalHeader>
          <Form onSubmit={this.onSubmit} className="message-change-input">
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
              <Button color="primary">Save Changes</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default CurrentUserMessage;

CurrentUserMessage.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    created_at: PropTypes.string,
    message: PropTypes.string
  }),
  removeItem: PropTypes.func,
  editItem: PropTypes.func
};
