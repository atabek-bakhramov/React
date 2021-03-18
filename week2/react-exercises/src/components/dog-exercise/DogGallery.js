import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import DogPhoto from './DogPhoto';
import Button from './Button';

const DogGallery = () => {
  const [ dogPhotos, setDogPhotos ] = useState([]);

  const getDogPhoto = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      const imageSource = await data.message;
      setDogPhotos([...dogPhotos, imageSource]);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Button getDogPhotoOnClick={getDogPhoto} />
      {dogPhotos.length === 0 && (<p>Get your first dog by clicking the button!</p>)}
      <ul>
        {dogPhotos.map((dog, index) => {
          return <DogPhoto key={index} dogImage={dog}></DogPhoto>
        })}
      </ul>
    </div>
  )
};

export default DogGallery;
