import React, { createContext } from 'react';

const UserContext = createContext({
  userID: '',
  loggedIn: false,
});

export default UserContext;
