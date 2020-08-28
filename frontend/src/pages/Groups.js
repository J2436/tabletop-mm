import React from 'react';
import Navbar from '../components/Navbar';
import GroupList from '../components/GroupList';

const Groups = (props) => {
  return (
    <div>
      <Navbar />
      <GroupList type="unjoined" title="Join a Group" />
    </div>
  );
};

export default Groups;
