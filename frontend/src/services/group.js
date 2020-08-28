import axios from 'axios';
const baseURL = 'http://localhost:5000/groups';

const getJoinedGroups = () => {
  return axios.get(baseURL + '/joinedGroups', { withCredentials: true });
};

const getOwnedGroups = () => {
  return axios.get(baseURL + '/ownedGroups', { withCredentials: true });
};

// Get groups except the current user - this is called to get the grouplist
// when a player is trying to join a group
const getUnjoinedGroups = () => {
  return axios.get(baseURL + '/unjoinedGroups', { withCredentials: true });
};

const joinGroup = (groupID) => {
  return axios.post(
    baseURL + '/joinGroup',
    { groupID },
    { withCredentials: true }
  );
};

const leaveGroup = (groupID) => {
  return axios.post(
    baseURL + '/leaveGroup',
    { groupID },
    { withCredentials: true }
  );
};

export default {
  getJoinedGroups,
  getOwnedGroups,
  getUnjoinedGroups,
  joinGroup,
  leaveGroup,
};
