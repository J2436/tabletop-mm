import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import TabletopService from '../services/login';

const Navbar = () => {
  const handleLogout = () => {
    console.log('logged out!');
  };
  return (
    <Nav>
      <LinkContainer to="/home">
        <Nav.Link> Home </Nav.Link>
      </LinkContainer>

      <LinkContainer to="/profile">
        <Nav.Link>Profile</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/players">
        <Nav.Link>Players</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/groups">
        <Nav.Link>Groups</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/">
        <Nav.Link className="ml-auto" onClick={TabletopService.logout}>
          Logout
        </Nav.Link>
      </LinkContainer>
    </Nav>
  );
};

export default Navbar;
