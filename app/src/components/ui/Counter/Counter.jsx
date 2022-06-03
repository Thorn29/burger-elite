import React from 'react';
import './Counter.css';

const Counter = ({ children, leftClick, rightClick, rightDisable, leftDisable }) => {
  return(
    <div className='counter'>
      <button onClick={leftClick} disabled={leftDisable} className='counter__arrow'>&#10094;</button>
      <span className='counter__number'>{children}</span>
      <button onClick={rightClick} disabled={rightDisable} className='counter__arrow'>&#10095;</button>
    </div>
  );
}

export default Counter;
