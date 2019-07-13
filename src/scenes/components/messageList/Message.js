import React, { Component } from "react";

import { FaRegThumbsUp, FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from "reactstrap";

import "./message.scss";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      text: this.props.data.message
    };

    this.likePost = this.likePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  likePost(id) {
    const { likeItem, data } = this.props;
    const { currentUser } = data;

    if (!currentUser) {
      likeItem(id);
    }
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

    console.log(this.state.text);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.props.data.id);
    this.props.editItem(this.props.data.id, this.state.text);

    this.toggle();
  }

  render() {
    console.log(this.props);
    const {
      id,
      avatar,
      created_at,
      message,
      currentUser,
      isLiked
    } = this.props.data;
    const { modal, text } = this.state;

    return (
      <div className={`message ${currentUser ? "current-user-message" : ""}`}>
        {!currentUser && (
          <a href="#" className="avatar">
            <img
              src={avatar}
              alt="user-avatar"
              style={{ height: 30, width: 30 }}
            />
          </a>
        )}
        <div className="content">
          {/* <a href="#" className="author">
              {user}
            </a> */}
          <div className="metadata">
            <p>{created_at}</p>
          </div>
          <p className="text">{message}</p>
          <div className="actions">
            <button
              type="button"
              className={`btn-action btn ${isLiked ? "liked" : null}`}
              onClick={() => this.likePost(id)}
            >
              <FaRegThumbsUp />
            </button>
            {currentUser && (
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
            )}
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
              <Button color="primary">
                Save Changes
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Message;
