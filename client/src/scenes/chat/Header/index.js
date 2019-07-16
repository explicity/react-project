import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavLink
} from 'reactstrap';

import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { participants, messagesAmount, lastMessage } = this.props.data;
    const { isOpen } = this.state;

    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">My chat</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                {participants} participant
                {participants !== 1 && 's'}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                {messagesAmount} message
                {messagesAmount !== 1 && 's'}
              </NavLink>
            </NavItem>
            <NavItem className="time">
              <p>last message at {lastMessage.split(' ')[1]}</p>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;

Header.propTypes = {
  data: PropTypes.shape({
    participants: PropTypes.number,
    messagesAmount: PropTypes.number,
    lastMessage: PropTypes.string
  })
};

