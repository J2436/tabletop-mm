import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LoginService from "../services/login";
import { useHistory } from "react-router-dom";
import Notification from "./Notification";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  let history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();
    LoginService.login(formData.email, formData.password)
      .then((res) => {
        history.push("/home");
      })
      .catch((err) => {
        //setErrorMessage(err);
        console.log(err);
      });
  };

  const handleEdit = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Form onSubmit={handleLogin}>
      <Notification message={errorMessage} />
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={handleEdit}
          value={formData.email}
          name="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleEdit}
          name="password"
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
