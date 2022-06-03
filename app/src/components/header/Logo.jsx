import React from 'react';
import { NavLink } from'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/icons/fast-food.svg';
import './Logo.css';

const Logo = () => {
  return(
    <NavLink to='/' className='logo'>
      <LogoIcon className='logo__icon' />
      <h1 className='logo__text'><strong>Burger</strong>Elite</h1>
    </NavLink>
  );
}

export default Logo;
