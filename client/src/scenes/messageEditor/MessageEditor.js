import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Form, FormGroup, Input } from "reactstrap";
import * as editMessageActions from "./duck/actions";
import * as chatActions from '../chat/duck/actions';

class MessageEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      text: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log('this.props: ', this.props);

    if (id) {
      const { dispatch } = this.props;
      dispatch(editMessageActions.fetchMessage(id));
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const { id, text } = this.state;
    const { dispatch, history } = this.props;

    dispatch(chatActions.updateMessage(id, text));
    this.setState({
      id: "",
      text: ""
    });
    history.push("/chat");
  }

  onCancel(event) {
    event.preventDefault();
    this.setState({
      id: "",
      text: ""
    });
    const { history } = this.props;
    history.push("/chat");
  }

  UNSAFE_componentWillReceiveProps(nextProps, prevState) {
    console.log(nextProps);
    if (nextProps.message.id !== prevState.id && nextProps.match.params.id) {
      this.setState({
        id: nextProps.message.id,
        text: nextProps.message.message
      });
    }

    return null;
  }

  handleChange(event) {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      [name]: value
    });
  }

  render() {
    const { text } = this.state;
    console.log("this.state: ", this.state);

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

const mapStateToProps = state => {
  const { message, loading, error } = state.editMessage;

  return { message, loading, error };
};

export default connect(mapStateToProps)(MessageEditor);
