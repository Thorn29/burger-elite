import React from 'react';
import './Modal.css';

const Modal = ({ children, clickBack }) => {
  return(
    <>
    <div className='modal__backdrop' onClick={clickBack}></div>
    <div className='modal__window'>
      {children}
    </div>
    </>
  );
}

export default Modal;
