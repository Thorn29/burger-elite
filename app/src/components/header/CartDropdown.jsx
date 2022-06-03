import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCartItems, selectCartPrice } from '../../redux/cart/cart-selector';
import * as actionTypes from '../../redux/cart/cart-action-types';
import CartList from '../cart/CartList';
import ActionButton from '../ui/ActionButton/ActionButton';
import EmptyText from '../ui/EmptyText/EmptyText';
import './CartDropdown.css';

const CartDropdown = ({ cartItems, totalPrice, history, dispatch }) => {

  const goToCart = () => {
    dispatch({type: actionTypes.TOGGLE_DROPDOWN});
    history.push('/cart');
  };

    return (
      <div className='cart-dropdown'>
         <div className='cart-dropdown__list'>
           {cartItems.length > 0 ?
            <CartList items={cartItems} min={true} /> :
            <EmptyText margin='1rem 0'>The cart is empty</EmptyText>}
         </div>
         <p className='cart-dropdown__price'>${totalPrice}</p>
        <ActionButton width='80%' click={goToCart}>Cart</ActionButton>
      </div>
    )};

const mapStateToProps = state => {
  return {
    cartItems: selectCartItems(state),
    totalPrice: selectCartPrice(state)
  }
}

export default withRouter(connect(mapStateToProps)(CartDropdown));
