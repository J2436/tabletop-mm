import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import PlayerList from '../components/PlayerList';
import PlayerService from '../services/player';

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    PlayerService.getPlayersExceptUser().then((res) => {
      setPlayers(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <PlayerList players={players} />
    </div>
  );
};

export default Players;
