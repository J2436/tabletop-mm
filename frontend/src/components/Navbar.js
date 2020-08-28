import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import LoginService from '../services/login';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  let history = useHistory();

  const handleLogout = () => {
    LoginService.logout().then((res) => {
      history.push('/');
    });
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

      <LinkContainer to="/">
        <Nav.Link className="ml-auto" onClick={handleLogout}>
          Logout
        </Nav.Link>
      </LinkContainer>
    </Nav>
  );
};

export default Navbar;
