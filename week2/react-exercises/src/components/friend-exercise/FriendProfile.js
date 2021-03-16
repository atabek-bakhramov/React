const FriendProfile = ({ data }) => {
  const { first, last }  = data.name;
  const { number, name } = data.location.street; 
  const { city, country } = data.location;
  const { email, cell } = data;

  return (
    <div>
      <ul>
        <li>Your new friend's name: {first} {last}</li>
        <li>The friend is from: {city}, {country} </li>
        <li>His/her address: {number} {name}</li>
        <li>You can connect to the friend via: {email} or {cell}</li>
      </ul>
    </div>
  )
};

export default FriendProfile;
