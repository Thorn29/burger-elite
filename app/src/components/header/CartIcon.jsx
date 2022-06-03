import React from 'react';
import { connect } from 'react-redux';
import { selectCartCount, selectDropdown } from '../../redux/cart/cart-selector';
import { ReactComponent as CartIco } from '../../assets/icons/cart.svg';
import * as actionTypes from '../../redux/cart/cart-action-types';
import './CartIcon.css';

const CartIcon = ({ cartNumber, dropdownStatus, dispatch }) => {
  return(
    <div onClick={() => dispatch({ type: actionTypes.TOGGLE_DROPDOWN })}
    className={dropdownStatus ? 'cart-icon cart-icon--active' : 'cart-icon'}>
      <CartIco className='cart-icon__icon' />
      <span className='cart-icon__number'>{cartNumber}</span>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cartNumber: selectCartCount(state),
    dropdownStatus: selectDropdown(state)
  }
};

export default connect(mapStateToProps)(CartIcon);
