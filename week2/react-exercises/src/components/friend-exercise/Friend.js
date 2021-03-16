import React, { useState } from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';

const Friend = () => {
  const [ friend, setFriend ] = useState(null);

  const getFriend = async () => {
    try {
      const response = await fetch('https://www.randomuser.me/api?results=1');
      const data = await response.json();
      setFriend(data.results[0]);
      console.log(data.results[0]);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Button addFriendOnClick={getFriend} />
      {friend && <FriendProfile data={friend} />}
    </div>
  )
};

export default Friend;
