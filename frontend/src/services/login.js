const axios = require('axios');
const baseURL = 'http://localhost:5000';

const login = (email, password) => {
  return axios.post(
    baseURL + '/login',
    { email, password },
    { withCredentials: true }
  );
};

// Check if user is logged in by checking if they have a valid jwt token
const checkLoggedIn = () => {
  return axios.get(baseURL + '/login/isLoggedIn', { withCredentials: true });
};

const getPlayers = () => {
  return axios.get(baseURL + '/players');
};

const getPlayersExcept = (id) => {
  return axios.get(baseURL + '/players/playersExcept/' + id, {
    withCredentials: true,
  });
};

const getProfile = () => {};

const logout = () => {
  axios.get(baseURL + '/login/logout', { withCredentials: true });
};

const getCurrUserID = () => {
  return axios.get(baseURL + '/players/currentUserID', {
    withCredentials: true,
  });
};

export default {
  getPlayers,
  login,
  logout,
  checkLoggedIn,
  getCurrUserID,
  getPlayersExcept,
};
