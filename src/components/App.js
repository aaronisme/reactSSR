import React from 'react';
import UserCard from './UserCard';
import userData from '../data/user.json'

export default () => <div>
  {userData.map((user, index) => <UserCard
    key={`user-${index}`}
    name={user.userName}
    image={user.image}
    id={user.userId} />)}
</div>