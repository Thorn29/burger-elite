import React from 'react';
import ActionButton from '../ActionButton/ActionButton';
import './InfoBox.css';

const InfoBox = ({ children, buttontext, click}) => {
  return(
    <div className='info-box'>
      <p className='info-box__text'>{children}</p>
      <ActionButton click={click}>{buttontext}</ActionButton>
    </div>
  );
}

export default InfoBox;
