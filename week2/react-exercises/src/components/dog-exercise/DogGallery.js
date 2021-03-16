import React, {useState} from 'react';
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
      console.log(data.message);
      setDogPhotos([...dogPhotos, imageSource]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const message = dogPhotos.length === 0 ? 'Get your first dog by clicking the button!' : '';

  return (
    <div>
      <Button getDogPhotoOnClick={getDogPhoto} />

      <ul>
        {dogPhotos.map(dog => {
          return <DogPhoto key={uuid()} dogImage={dog}></DogPhoto>
        })}
      </ul>

      <p>{message}</p>

    </div>
  )
}

export default DogGallery;
