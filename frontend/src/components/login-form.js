import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import TabletopService from '../services/login';
import { Redirect, useHistory } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import Notification from './notification';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  let history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();
    TabletopService.login(email, password)
      .then((res) => {
        history.push('/profile');
      })
      .catch((err) => {
        // setErrorMessage(err.response.data.error);
        console.log(err);
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
        <Form.Label>Username</Form.Label>
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
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;
