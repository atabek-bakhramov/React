import React, { useState } from "react";
import Button from "./Button";
import FriendProfile from "./FriendProfile";

const Friend = () => {
  const [friend, setFriend] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getFriend = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("https://www.randomuser.me/api?results=1");
      const data = await response.json();
      setFriend(data.results[0]);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button addFriendOnClick={getFriend} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {friend && <FriendProfile data={friend} />}
    </div>
  );
};

export default Friend;
