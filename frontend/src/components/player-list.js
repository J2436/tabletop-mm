import React, { useState, useEffect } from 'react';
import TabletopService from '../services/login';
import Player from './player';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';

const PlayerList = () => {
  const [userID, setUserID] = useState(0);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    TabletopService.getCurrUserID().then((res) => {
      setUserID(res.data);
    });
    TabletopService.getPlayersExcept(userID).then((res) => {
      setPlayers(res.data);
    });
  }, []);

  return (
    <Container>
      {console.log({ userID })}
      <CardDeck className="deck">
        {players.map((player) => (
          <Player key={player.screenName} player={player} />
        ))}
      </CardDeck>
    </Container>
  );
};

export default PlayerList;
