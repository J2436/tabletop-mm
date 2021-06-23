import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import PlayerService from "../services/player";
import "./styles/RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    screenName: "",
    email: "",
    password: "",
    age: 18,
    campaignsPlayed: 0,
    yoe: 0,
    sizePref: 2,
    combat: 1,
    sexualContent: 1,
    humor: 1,
    violence: 1,
    systemsPref: [],
    genresPref: [],
  });

  const handleEdit = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (event) => {
    let genres = ["Fantasy", "Sci-Fi", "Steampunk", "Horror", "Gothic"];
    let systems = [
      "D&D 5e",
      "Pathfinder",
      "Dungeon Crawl Classics",
      "Call of Cthulu",
      "Warhammer Fantasy",
    ];

    setFormData({
      ...formData,
      systemsPref: formData.systemsPref.map((selection) => systems[selection]),
      genresPref: formData.genresPref.map((selection) => genres[selection]),
    });

    PlayerService.register(formData)
      .then((res) => {
        // TODO: Snackbar for successful registration
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <Form onSubmit={handleRegister}>
      <Container>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label> Email</Form.Label>
            <Form.Control
              required
              onChange={handleEdit}
              value={formData.email}
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label> Password </Form.Label>
            <Form.Control
              required
              onChange={handleEdit}
              value={formData.password}
              type="password"
              name="password"
              placeholder="Enter password"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label> Screen Name</Form.Label>
            <Form.Control
              required
              onChange={handleEdit}
              value={formData.screenName}
              type="text"
              name="screenName"
              placeholder="Enter screen name"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Age</Form.Label>
            <Form.Control
              required
              onChange={handleEdit}
              value={formData.age}
              type="number"
              name="age"
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
              onChange={handleEdit}
              value={formData.sizePref}
              name="sizePref"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label># of Campaigns Played</Form.Label>
            <Form.Control
              type="number"
              min="0"
              max="999"
              onChange={handleEdit}
              value={formData.campaignsPlayed}
              name="campaignsPlayed"
            ></Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Years of Experience</Form.Label>
            <Form.Control
              type="number"
              min="0"
              max="99"
              onChange={handleEdit}
              value={formData.yoe}
              name="yoe"
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
                onChange={(selections) => {
                  setFormData({ ...formData, systemsPref: selections });
                }}
                name="systemsPref"
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
                name="genresPref"
                onChange={(selections) => {
                  setFormData({ ...formData, genresPref: selections });
                }}
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
              value={formData.combat}
              name="combat"
              onChange={handleEdit}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Sexual Content</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="10"
              value={formData.sexualContent}
              name="sexualContent"
              onChange={handleEdit}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Humor</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="10"
              value={formData.humor}
              name="humor"
              onChange={handleEdit}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Violence</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="10"
              value={formData.violence}
              name="violence"
              onChange={handleEdit}
            />
          </Form.Group>
        </Form.Row>

        <Button type="submit">Register</Button>
      </Container>
    </Form>
  );
};

export default RegistrationForm;
