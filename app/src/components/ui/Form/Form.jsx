import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from './FormInput';
import ActionButton from '../ActionButton/ActionButton';
import './Form.css';

const Form = ({ title, subtitle, fields, submit, inputChange, errors }) => {

  let formSwitch;

  if (title === 'Sign in') formSwitch = <Link className='form__switch' to='/sign_up'>Don't have an account? Create one now!</Link>;
  if (title === 'Sign up') formSwitch = <Link className='form__switch' to='/sign_in'>Already have an account? Sign in instead</Link>;

  return(
    <form className='form' onSubmit={submit}>
      <h1 className='form__title'>{title}</h1>
      <h4 className='form__subtitle'>{subtitle}</h4>
      {fields.map(({ label, type, name, required }) => <FormInput key={`${label}${type}`} change={inputChange} label={label} name={name} type={type} required={required} errormsg={errors[name]} />)}
      <ActionButton width='90%'>Submit</ActionButton>
      {formSwitch}
    </form>
  );
}

export default Form;
