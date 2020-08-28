import React, { useState, useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import GroupCard from './GroupCard';
import GroupService from '../services/group';
import GroupFilter from './GroupFilter';
import Accordion from 'react-bootstrap/Accordion';

const GroupList = ({ title, type }) => {
  const [groups, setGroups] = useState([]);
  const joinGroup = (group) => {
    GroupService.joinGroup(group.id).then(() => {
      GroupService.getUnjoinedGroups().then((res) => {
        setGroups(res.data);
      });
    });
  };

  const leaveGroup = (group) => {
    GroupService.leaveGroup(group.id).then(() => {
      GroupService.getJoinedGroups().then((res) => {
        setGroups(res.data);
      });
    });
  };

  const manageGroup = (group) => {
    console.log('Manage Group');
  };

  useEffect(() => {
    switch (type) {
      case 'unjoined':
        GroupService.getUnjoinedGroups()
          .then((res) => {
            setGroups(res.data);
          })
          .catch((err) => console.log(err));
        break;
      case 'joined':
        GroupService.getJoinedGroups()
          .then((res) => {
            setGroups(res.data);
          })
          .catch((err) => console.log(err));
        break;
      case 'owned':
        GroupService.getOwnedGroups()
          .then((res) => {
            setGroups(res.data);
          })
          .catch((err) => console.log(err));
        break;
    }
  }, []);

  let handler;
  switch (type) {
    case 'joined':
      handler = leaveGroup;
      break;
    case 'unjoined':
      handler = joinGroup;
      break;
    case 'owned':
      handler = manageGroup;
      break;
  }
  return (
    <Container>
      <h4>{title}</h4>
      <Accordion defaultActiveKey="0">
        {groups.map((group) => (
          <GroupCard
            key={group.id}
            type={type}
            group={group}
            handler={handler}
          />
        ))}
      </Accordion>
    </Container>
  );
};

export default GroupList;
