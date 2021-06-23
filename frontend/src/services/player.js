const axios = require("axios");
const baseURL = `${process.env.REACT_APP_API_URL}/players`;

const getPlayers = () => {
  return axios.get(`${baseURL}/players`);
};

const getCurrentPlayer = () => {
  return axios.get(`${baseURL}/currentPlayer`, {
    withCredentials: true,
  });
};

const getCurrUserID = () => {
  return axios.get(`${baseURL}/currentUserID`, {
    withCredentials: true,
  });
};

const getPlayersExceptUser = () => {
  return axios.get(`${baseURL}/playersExceptUser`, {
    withCredentials: true,
  });
};

const register = (data) => {
  return axios.post(baseURL, data, { withCredentials: true });
};
export default {
  getPlayers,
  getCurrentPlayer,
  getCurrUserID,
  getPlayersExceptUser,
  register,
};
