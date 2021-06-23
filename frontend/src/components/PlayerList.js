import React, { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";

const PlayerList = ({ players }) => {
  return (
    <Container>
      <CardDeck className="deck">
        {players.map((player) => (
          <PlayerCard key={player.screenName} player={player} />
        ))}
      </CardDeck>
    </Container>
  );
};

export default PlayerList;
