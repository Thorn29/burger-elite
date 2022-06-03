import React from 'react';
import { connect } from 'react-redux';
import { selectDropdown } from '../../redux/cart/cart-selector';
import Logo from './Logo';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import AuthButton from './AuthButton';
import './Header.css';

const Header = ({ dropdownIsVisible }) => {
  return(
    <header className='header'>
      <Logo />
      <CartIcon />
      <AuthButton />
      {dropdownIsVisible && <CartDropdown />}
    </header>
  );
};

const mapStateToProps = state => {
  return {
    dropdownIsVisible: selectDropdown(state)
  }
}

export default connect(mapStateToProps)(Header);
