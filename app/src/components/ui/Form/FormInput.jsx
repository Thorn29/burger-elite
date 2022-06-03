import React from 'react';
import './FormInput.css';

const FormInput = ({ label, change, errormsg, ...inputProps}) => {

  return(
    <div className='form-input'>
      <input className='form-input__input' onChange={change} {...inputProps} placeholder=' ' autoComplete='off' />
      <label className='form-input__label'>{label}</label>
      <p className='form-input__error'>{errormsg}</p>
    </div>
  );
}

export default FormInput;
