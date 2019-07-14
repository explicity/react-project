import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Form,
  Input,
  FormGroup,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class UserModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

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
    );
  }
}

const mapStateToProps = state => {
  const { isShown } = state.modal;

  return { isShown };
};

export default connect(mapStateToProps)(UserModal);
