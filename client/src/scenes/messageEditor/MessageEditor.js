import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Form, FormGroup, Input } from "reactstrap";

class MessageEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userId !== this.props.userId && nextProps.userId !== "") {
      const user = this.props.messages.find(
        item => item.id === nextProps.userId
      );
      this.setState({
        text: user.message
      });
    }
  }

  onSubmit(event) {
    event.preventDefault();
  }

  onCancel(event) {
    event.preventDefault();
    this.setState({
      text: ""
    });
    const { history } = this.props;
    history.push("/chat");
  }

  handleChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { text } = this.state;
    console.log('this.state: ', this.state);

    return (
      <div className="modal-edit">
        <div className="container">
          <h2 className="mb-2">Edit message</h2>
          <Form className="message-change-input">
            <FormGroup>
              <Input
                type="textarea"
                name="text"
                onChange={this.handleChange}
                value={text}
              />
            </FormGroup>
            <Button onClick={this.onCancel} color="secondary" className="mr-2">
              Cancel
            </Button>
            <Button onClick={this.onSubmit} color="primary">
              Save Changes
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect()(MessageEditor);
