import React from 'react';
import NLink from './NLink'
import { ReactComponent as FoodIcon } from '../../assets/icons/food.svg';
import { ReactComponent as MedalIcon } from '../../assets/icons/medal.svg';
import { ReactComponent as BurgerIcon } from '../../assets/icons/burger.svg';
import { ReactComponent as InfoIcon } from '../../assets/icons/info.svg';
import './Navigation.css';

const Navigation = (props) => {
  return(
    <nav className='navigation'>
      <NLink to='/food'><FoodIcon /><span>Food</span></NLink>
      <NLink to='/builder'><BurgerIcon /><span>Builder</span></NLink>
      <NLink to='/orders'><MedalIcon /><span>Orders</span></NLink>
      <NLink to='/about'><InfoIcon /><span>About</span></NLink>
    </nav>
  );
}

export default Navigation;
