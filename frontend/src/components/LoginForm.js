import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import LoginService from "../services/login";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Notification from "./Notification";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();
    LoginService.login(email, password)
      .then((res) => {
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
        //setErrorMessage(err.response.data.error);
      });
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Form onSubmit={handleLogin}>
      <Notification message={errorMessage} />
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={handleEmail}
          value={email}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handlePassword}
          type="password"
          placeholder="Enter password"
        />
      </Form.Group>
      <Button className="ml-auto" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
