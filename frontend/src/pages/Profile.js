import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "../components/Navbar";
import PlayerService from "../services/player";

const Profile = () => {
  // Get the current players information
  useEffect(() => {
    PlayerService.getCurrentPlayer().then((player) => {
      setCurrentPlayer(player.data);
    });
  }, []);

  const [currentPlayer, setCurrentPlayer] = useState({});
  console.log(currentPlayer);

  return (
    <div>
      <Navbar />
      <h1>{currentPlayer.screenName}</h1>
    </div>
  );
};

export default Profile;
