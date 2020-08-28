import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import PlayerService from '../services/player';
import './styles/RegistrationForm.css';

const RegistrationForm = () => {
  const [screenName, setScreenName] = useState('');
  const [email, setEmail] = useState('');
  const [sizePref, setSizePref] = useState(1);
  const [yoe, setYoe] = useState(0);
  const [campaignsPlayed, setCampaignsPlayed] = useState(0);
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(13);
  const [combat, setCombat] = useState(1);
  const [sexualContent, setSexualContent] = useState(1);
  const [humor, setHumor] = useState(1);
  const [violence, setViolence] = useState(1);
  const [systemsPref, setSystemsPref] = useState([0, 4]);
  const [genresPref, setGenresPref] = useState([0, 4]);

  const handleRegister = (event) => {
    let genres = ['Fantasy', 'Sci-Fi', 'Steampunk', 'Horror', 'Gothic'];
    let systems = [
      'D&D 5e',
      'Pathfinder',
      'Dungeon Crawl Classics',
      'Call of Cthulu',
      'Warhammer Fantasy',
    ];

    let selectedSystems = systemsPref.map((selection) => systems[selection]);
    let selectedGenres = genresPref.map((selection) => genres[selection]);

    let data = {
      screenName,
      email,
      password,
      age,
      campaignsPlayed,
      yoe,
      sizePref,
      combat,
      sexualContent,
      humor,
      violence,
      systemsPref: selectedSystems,
      genresPref: selectedGenres,
    };
    PlayerService.register(data)
      .then((res) => {})
      .catch((err) => {});
  };

  const handleGenres = (value) => {
    setGenresPref(value);
  };

  const handleSystems = (value) => {
    setSystemsPref(value);
  };

  const handleScreenName = (event) => {
    setScreenName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const handleCombat = (event) => {
    setCombat(event.target.value);
  };

  const handleViolence = (event) => {
    setViolence(event.target.value);
  };

  const handleHumor = (event) => {
    setHumor(event.target.value);
  };

  const handleSexualContent = (event) => {
    setSexualContent(event.target.value);
  };

  const handleSizePref = (event) => {
    setSizePref(event.target.value);
  };
  const handleYoe = (event) => {
    setYoe(event.target.value);
  };
  const handleCampaignsPlayed = (event) => {
    setCampaignsPlayed(event.target.value);
  };

  return (
    <Form onSubmit={handleRegister}>
      <Container>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label> Email</Form.Label>
            <Form.Control
              required
              onChange={handleEmail}
              value={email}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label> Password </Form.Label>
            <Form.Control
              required
              onChange={handlePassword}
              value={password}
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label> Screen Name</Form.Label>
            <Form.Control
              required
              onChange={handleScreenName}
              value={screenName}
              type="text"
              placeholder="Enter screen name"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Age</Form.Label>
            <Form.Control
              required
              onChange={handleAge}
              value={age}
              type="number"
              min="13"
              max="99"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Preferred # of players</Form.Label>
            <Form.Control
              type="number"
              min="0"
              max="10"
              onChange={handleSizePref}
              value={sizePref}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label># of Campaigns Played</Form.Label>
            <Form.Control
              type="number"
              min="0"
              max="999"
              onChange={handleCampaignsPlayed}
              value={campaignsPlayed}
            ></Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Years of Experience</Form.Label>
            <Form.Control
              type="number"
              min="0"
              max="99"
              onChange={handleYoe}
              value={yoe}
            ></Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Prefered Game Systems</Form.Label>
            <Container>
              <ToggleButtonGroup
                className="systems-btns"
                type="checkbox"
                onChange={handleSystems}
              >
                <ToggleButton value={0}> D&D 5e </ToggleButton>
                <ToggleButton value={1}> Pathfinder </ToggleButton>
                <ToggleButton value={2}> Dungeon Crawl Classics </ToggleButton>
                <ToggleButton value={3}> Call of Cthulu</ToggleButton>
                <ToggleButton value={4}> Warhammer Fantasy </ToggleButton>
              </ToggleButtonGroup>
            </Container>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Preferred Genres</Form.Label>
            <Container>
              <ToggleButtonGroup
                className="generes-btns"
                type="checkbox"
                onChange={handleGenres}
              >
                <ToggleButton value={0}> Fantasy </ToggleButton>
                <ToggleButton value={1}> Sci-Fi </ToggleButton>
                <ToggleButton value={2}> Steampunk </ToggleButton>
                <ToggleButton value={3}> Horror </ToggleButton>
                <ToggleButton value={4}> Gothic </ToggleButton>
              </ToggleButtonGroup>
            </Container>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Combat</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="10"
              value={combat}
              onChange={handleCombat}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Sexual Content</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="10"
              value={sexualContent}
              onChange={handleSexualContent}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Humor</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="10"
              value={humor}
              onChange={handleHumor}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Violence</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="10"
              value={violence}
              onChange={handleViolence}
            />
          </Form.Group>
        </Form.Row>

        <Button type="submit">Register</Button>
      </Container>
    </Form>
  );
};

export default RegistrationForm;
