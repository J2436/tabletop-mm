import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './styles/GroupCard.css';

function GroupCard({ group, handler, type }) {
  let title = '';
  switch (type) {
    case 'joined':
      title = 'Leave Group';
      break;
    case 'unjoined':
      title = 'Join Group';
      break;
    case 'owned':
      title = 'Manage Group';
      break;
  }

  return (
    <Card>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={group.id}
        className="group-header"
      >
        <h4>{group.name}</h4>
        <p className="compatability">{group.system}</p>
      </Accordion.Toggle>

      <Accordion.Collapse eventKey={group.id}>
        <Card.Body>
          <div>Description: {group.description}</div>
          <div>Group Size: {group.size}</div>
          <div>Meeting Date: {Date(group.meetingDateTime * 1000)}</div>
          <div>Type: {group.system}</div>
          <div>Genre: {group.genre}</div>
          <div>Spots remaining: {group.size - group.players.length}</div>
          <Button onClick={() => handler(group)}>{title}</Button>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}
export default GroupCard;
