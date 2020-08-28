import React from 'react';
import Navbar from '../components/navbar';
import Button from 'react-bootstrap/Button';
import GroupForm from '../components/group-form';
import { LinkContainer } from 'react-router-bootstrap';

const Groups = () => {
  return (
    <div>
      <Navbar />
      <LinkContainer to="/groupForm">
        <Button>Create a Group</Button>
      </LinkContainer>
    </div>
  );
};

export default Groups;
