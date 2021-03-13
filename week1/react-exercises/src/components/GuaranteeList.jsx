import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import chatImg from '../images/chat.png';
import coinImg from '../images/coin.png';
import delivery from '../images/delivery.png';
import Guarantee from './Guarantee';
import style from '../styles/Guarantee.module.css';

const GuaranteeList = () => {
  const [ service ] = useState([
    { 
      id: uuid(),
      img: chatImg,
      title: 'Free Shipping',
      description: 'Lorem sit amet percipit repudiandae ipsum dolor sit amet, percipit repudiandaeu'
    },
    { 
      id: uuid(),
      img: coinImg,
      title: '100% Money Back',
      description: 'Ipsum dolor sit amet amet, percipit repudiandae duo cu dolor sit amet percipit'
    },
    { 
      id: uuid(),
      img: delivery,
      title: 'Online Support 24/7',
      description: 'Lorem ipsum dolor sit amet, percipit repudiande dolor sit amet lerm curd vom repudiande'
    }
  ]);
  return (
    <>
      <h1 className="header">Exercise Two</h1>
      <div className={style.guaranteeList}>
        {service.map(item => (
          <Guarantee key={item.id} img={item.img} title={item.title} description={item.description}/>
        ))}
      </div>
    </>
  )
};

export default GuaranteeList;
