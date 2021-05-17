import React, { useState, useEffect } from "react";
import "./styles/landing.css";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container, ButtonToolbar, Modal } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";

const Landing = () => {
  const [showLoginModal, setLoginModal] = useState(false);
  const [showRegisterModal, setRegisterModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleLoginModal = () => {
    setLoginModal(!showLoginModal);
    setEmail("");
    setPassword("");
  };

  const toggleRegisterModal = () => {
    console.log(process.env.REACT_APP_API_URL);
    setRegisterModal(!showRegisterModal);
  };

  return (
    <Jumbotron fluid className="jumbotron">
      <Container>
        <h1
          className="text-center"
          style={{ fontFamily: ["Fjalla One", "sans-serif"] }}
        >
          Tabletop Matchmaker
        </h1>
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
