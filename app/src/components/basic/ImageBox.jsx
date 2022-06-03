import React from 'react';
import Text from './Text';
import './ImageBox.css';

const ImageBox = ({ image, heading, children}) => {
  return(
    <div className='image-box'>
      <div className='image-box__image-container'>
        <img className='image-box__image' src={image} alt={heading} />
      </div>
      <div className='image-box__text'>
      <Text heading={heading}>
        {children}
      </Text>
      </div>
    </div>
  );
}

export default ImageBox;
