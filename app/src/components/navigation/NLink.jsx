import React from 'react';
import { NavLink } from 'react-router-dom';
import './NLink.css';

const NLink = ({ to, children }) => {
  return(
    <NavLink exact to={to} className='nav-link'>
      {children}
    </NavLink>
  );
}

export default NLink;
