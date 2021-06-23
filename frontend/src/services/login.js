const axios = require("axios");
const baseURL = `${process.env.REACT_APP_API_URL}/login`;

const login = (email, password) => {
  return axios.post(baseURL, { email, password }, { withCredentials: true });
};

// Check if user is logged in by checking if they have a valid jwt token
const isLoggedIn = () => {
  return axios.get(`${baseURL}/isLoggedIn`, { withCredentials: true });
};

const logout = () => {
  axios.get(`${baseURL}/logout`, { withCredentials: true });
};

export default {
  login,
  logout,
  isLoggedIn,
};
