import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './styles/Player.css';

const Player = (props) => {
  return (
    <Card className="playerCard rounded text-center">
      <Card.Img
        variant="top"
        src="https://www.clipartkey.com/mpngs/m/29-297748_round-profile-image-placeholder.png"
        className="profilePic rounded-circle "
      />
      <Card.Body>
        <Card.Title className="text-center">
          {props.player.screenName}
        </Card.Title>
        <Card.Text>Hello</Card.Text>
        <Button className="invite-btn">Invite</Button>
      </Card.Body>
    </Card>
  );
};

export default Player;
