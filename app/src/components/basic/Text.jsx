import React from 'react';
import './Text.css';

const Text = ({ heading, children }) => {
  return(
    <div className='text'>
      <h4 className='text__heading'>{heading}</h4>
      <p className='text__content'>{children}</p>
    </div>
  );
}

export default Text;
