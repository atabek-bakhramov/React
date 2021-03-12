import React from 'react';
import '../styles/guarantee.css';

const Guarantee = (props) => {
  const { img, title,  description } = props;
  return (
    <div className='guarantee-list-item'>
      <img className='guarantee-item-image' src={img} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
};

export default Guarantee
