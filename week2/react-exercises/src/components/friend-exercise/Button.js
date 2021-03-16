import React from 'react';

const Button = ({ addFriendOnClick }) => {
  return (
    <div>
      <button onClick={addFriendOnClick}>Add Friend</button>
    </div>
  )
}

export default Button;
