import React from 'react';
import style from '../styles/Guarantee.module.css';

const Guarantee = (props) => {
  const { img, title,  description } = props;
  return (
    <div className={style.guaranteeListItem}>
      <img className={style.guaranteeItemImage} src={img} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
};

export default Guarantee
