import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import DogPhoto from "./DogPhoto";
import Button from "./Button";

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getDogPhoto = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      const imageSource = await data.message;
      setDogPhotos([...dogPhotos, imageSource]);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button getDogPhotoOnClick={getDogPhoto} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {dogPhotos.length === 0 && (
        <p>Get your first dog by clicking the button!</p>
      )}
      <ul>
        {dogPhotos.map((dog, index) => {
          return <DogPhoto key={index} dogImage={dog}></DogPhoto>;
        })}
      </ul>
    </div>
  );
};

export default DogGallery;
