import React from 'react';
import _ from 'lodash';

const UsersList = (props) => {
  const {children} = props;
  const listItemStyle = {
    width: 300,
    display: 'flex',
    justifyContent: 'space-between'
  };
  const columnStyle = {
    width: 100
  };
  const users = _.map(children, (user) => {
    return (
      <div
        key={user.id}
        style={listItemStyle}>
        <div style={columnStyle}>
          {user.name}
        </div>
        <div style={columnStyle}>
          {user.age}
        </div>
        <div style={columnStyle}>
          {user.id}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div style={listItemStyle}>
        <div style={columnStyle}>
          Name
        </div>
        <div style={columnStyle}>
          Age
        </div>
        <div style={columnStyle}>
          ID
        </div>
      </div>
      <div>
        {users}
      </div>
    </div>
  );
};

UsersList.propTypes = {children: React.PropTypes.array.isRequired};

export default UsersList;
