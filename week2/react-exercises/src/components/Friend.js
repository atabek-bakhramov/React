import React, { useState } from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';

const Friend = () => {
  const [friend, setFriend] = useState({});

  const getFriend = async () => {
    try {
      const response = await fetch('https://www.randomuser.me/api?results=1');
      const data = await response.json();
      await setFriend(data.results[0]);
      await console.log(friend);
      // console.log(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Button addFriendOnClick={getFriend} />
      <FriendProfile data={friend} />
    </div>
  )
};

export default Friend;
