import React, { useState, useEffect, useContext, useRef } from 'react';
import './styles/landing.css';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, ButtonToolbar, Modal } from 'react-bootstrap';
import LoginForm from '../components/login-form';
import RegistrationForm from '../components/registration-form';
import LoginService from '../services/login';
import UserContext from '../context/user.context';

const Landing = (props) => {
  const [showLoginModal, setLoginModal] = useState(false);
  const [showRegisterModal, setRegisterModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    LoginService.checkLoggedIn().then((response) => {
      console.log(response);
    });
  }, []);

  const toggleLoginModal = () => {
    setLoginModal(!showLoginModal);
    setEmail('');
    setPassword('');
  };

  const toggleRegisterModal = () => {
    setRegisterModal(!showRegisterModal);
  };

  return (
    <Jumbotron fluid className="jumbotron">
      <Container>
        <h1 className="text-center">Tabletop Matchmaker</h1>
        <hr />
        <div className="text-center">
          <ButtonToolbar className="custom-btn-toolbar">
            <Button size="lg" onClick={toggleLoginModal}>
              Login
            </Button>
            <Button onClick={toggleRegisterModal} size="lg">
              Register
            </Button>
          </ButtonToolbar>
        </div>
        <Modal show={showLoginModal} onHide={toggleLoginModal}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginForm />
          </Modal.Body>
        </Modal>

        <Modal
          show={showRegisterModal}
          onHide={toggleRegisterModal}
          dialogClassName="modal-70w"
        >
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <RegistrationForm />
          </Modal.Body>
        </Modal>
      </Container>
    </Jumbotron>
  );
};

export default Landing;
