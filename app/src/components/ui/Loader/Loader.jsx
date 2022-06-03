import React from 'react';
import './Loader.css';

const Loader = (props) => {
  return(
    <div className='loader'>
      <div className="loader__circle">
        <div className='loader__center'></div>
      </div>
      <p className='loader__text'>Loading...</p>
    </div>
  );
}

export default Loader;
