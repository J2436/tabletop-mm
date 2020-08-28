import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import './group-form.css';

const GroupForm = (props) => {
  const [name, setName] = useState('');
  const [size, setSize] = useState(0);
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(0);
  const [system, setSystem] = useState('');
  const [genre, setGenre] = useState('');
  const [combat, setCombat] = useState(0);
  const [sexualContent, setSexualContent] = useState(0);
  const [humor, setHumor] = useState(0);
  const [violence, setViolence] = useState(0);
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let date = new Date(meetingDate + 'T' + meetingTime);

    const data = {
      name,
      size,
      meetingDateTime: date / 1000,
      minAge,
      maxAge,
      system,
      genre,
      combat,
      sexualContent,
      humor,
      violence,
      description,
    };
    axios
      .post('http://localhost:5000/groups/createGroup', data, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSize = (event) => {
    setSize(event.target.value);
  };

  const handleMinAge = (event) => {
    setMinAge(event.target.value);
    if (minAge > maxAge) {
      setMaxAge(minAge);
    }
  };

  const handleMaxAge = (event) => {
    setMaxAge(event.target.value);
  };

  const handleSystem = (event) => {
    setSystem(event.target.value);
  };

  const handleGenre = (event) => {
    setGenre(event.target.value);
  };

  const handleCombat = (event) => {
    setCombat(event.target.value);
  };
  const handleSexualContent = (event) => {
    setSexualContent(event.target.value);
  };
  const handleHumor = (event) => {
    setHumor(event.target.value);
  };
  const handleViolence = (event) => {
    setViolence(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleDate = (event) => {
    setMeetingDate(event.target.value);
  };
  const handleTime = (event) => {
    setMeetingTime(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <h1 className="text-center">Create a Group</h1>
        <hr />
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={handleName}
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Meeting Date</Form.Label>
            <Form.Control type="date" onChange={handleDate}></Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label> Time </Form.Label>
            <Form.Control type="time" onChange={handleTime} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Number of Players </Form.Label>
            <Form.Control
              type="number"
              min="2"
              max="10"
              placeholder="2"
              onChange={handleSize}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Min Age</Form.Label>
            <Form.Control
              type="number"
              min="13"
              max="99"
              placeholder="13"
              onChange={handleMinAge}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Max Age</Form.Label>
            <Form.Control
              type="number"
              min={minAge}
              max="99"
              placeholder={minAge}
              onChange={handleMaxAge}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Game System</Form.Label>
            <Form.Control as="select" onChange={handleSystem}>
              <option>D&D 5e</option>
              <option>Pathfinder</option>
              <option>Dungeon Crawl Classics</option>
              <option>Call of Cthulu</option>
              <option>Warhammer Fantasy</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Genre</Form.Label>
            <Form.Control as="select" onChange={handleGenre}>
              <option>Fantasy</option>
              <option>Sci-Fi</option>
              <option>Steampunk</option>
              <option>Horror</option>
              <option>Gothic</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Roleplay vs Combat</Form.Label>
            <Form.Control as="select" onChange={handleCombat}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Sexual Content</Form.Label>
            <Form.Control as="select" onChange={handleSexualContent}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Humor</Form.Label>
            <Form.Control as="select" onChange={handleHumor}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Violence</Form.Label>
            <Form.Control as="select" onChange={handleViolence}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="5" onChange={handleDescription} />
          </Form.Group>
        </Form.Row>
      </Container>
      <Container className="text-center">
        <Button type="submit" className="submit-btn">
          Create Group
        </Button>
      </Container>
    </Form>
  );
};

export default GroupForm;
