import React from 'react';

import UsersList from './UsersList';

const HelloWorld = ({users = ['No active users']}) => {
  return (
    <div>
      <h1>Users list</h1>
      <UsersList>
        {users}
      </UsersList>
    </div>
  );
};

HelloWorld.propTypes = {children: React.PropTypes.array};

export default HelloWorld;
