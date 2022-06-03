import React from 'react';
import ActionButton from '../ui/ActionButton/ActionButton';
import './NotFound.css';

const NotFound = ({ click, button, desc }) => {
  return(
    <div className='not-found'>
      <h4 className='not-found__title'>404</h4>
      <p className='not-found__desc'>{desc}</p>
      <ActionButton width='90%' click={click}>{button}</ActionButton>
    </div>
  );
}

export default NotFound;
