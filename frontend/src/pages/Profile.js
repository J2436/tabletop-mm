import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from '../components/Navbar';

const Profile = (props) => {
  const [editProfile, setEditProfile] = useState(false);

  return (
    <div>
      <Navbar />
      <Button
        onClick={() => {
          setEditProfile(!editProfile);
        }}
      >
        Edit Profile
      </Button>
    </div>
  );
};

export default Profile;
