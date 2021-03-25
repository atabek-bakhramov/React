const DogPhoto = ({ dogImage }) => {
  return (
    <>
      <li>
        <img src={dogImage} width="200" alt="A dog" />
      </li>
    </>
  );
};

export default DogPhoto;
