import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar';
import { Button, Container, Row, Col } from 'react-bootstrap';
import GroupList from '../components/GroupList';
import { LinkContainer } from 'react-router-bootstrap';
import GroupService from '../services/group';
import './styles/Home.css';

const Home = () => {
  const [groups, setGroups] = useState();

  function test() {
    GroupService.getToken()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid className="text-center">
      <NavBar />
      <Row className="action-row">
        <LinkContainer to="/groups">
          <Button className="ml-auto mr-auto " variant="primary">
            Join a Group
          </Button>
        </LinkContainer>

        <LinkContainer to="/groupForm">
          <Button className="ml-auto mr-auto " variant="warning">
            Create a Group
          </Button>
        </LinkContainer>
      </Row>
      <Row>
        <Col>
          <GroupList type="joined" title="Joined Groups" />
        </Col>
        <Col>
          <GroupList type="owned" title="Owned Groups" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
