import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const GroupForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    size: '',
    meetingDate: '',
    meetingTime: '',
    minAge: '',
    maxAge: '',
    system: '',
    genre: '',
    combat: '',
    sexualContent: '',
    humor: '',
    violence: '',
    description: '',
  });

  let history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      date: formData.meetingDate + 'T' + formData.meetingTime,
      players: [],
    });
    axios
      .post('http://localhost:5000/groups/createGroup', formData, {
        withCredentials: true,
      })
      .then((res) => {
        history.push('/home');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
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
              value={formData.name}
              name="name"
              onChange={handleEdit}
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Meeting Date</Form.Label>
            <Form.Control
              type="date"
              name="meetingDate"
              onChange={handleEdit}
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label> Time </Form.Label>
            <Form.Control
              type="time"
              name="meetingDate"
              onChange={handleEdit}
            />
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
              name="size"
              onChange={handleEdit}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Min Age</Form.Label>
            <Form.Control
              type="number"
              min="13"
              max="99"
              placeholder="13"
              name="minAge"
              onChange={handleEdit}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Max Age</Form.Label>
            <Form.Control
              type="number"
              min={formData.minAge}
              max="99"
              placeholder={formData.minAge}
              name="maxAge"
              onChange={handleEdit}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Game System</Form.Label>
            <Form.Control as="select" name="system" onChange={handleEdit}>
              <option>D&D 5e</option>
              <option>Pathfinder</option>
              <option>Dungeon Crawl Classics</option>
              <option>Call of Cthulu</option>
              <option>Warhammer Fantasy</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Genre</Form.Label>
            <Form.Control as="select" name="genre" onChange={handleEdit}>
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
            <Form.Control as="select" name="combat" onChange={handleEdit}>
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
            <Form.Control
              as="select"
              name="sexualContent"
              onChange={handleEdit}
            >
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
            <Form.Control as="select" name="humor" onChange={handleEdit}>
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
            <Form.Control as="select" name="violence" onChange={handleEdit}>
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
            <Form.Control
              as="textarea"
              name="description"
              rows="5"
              onChange={handleEdit}
            />
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
