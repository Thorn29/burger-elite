import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems, selectCartCount, selectCartPrice } from '../../redux/cart/cart-selector';
import './CartData.css';
import CartList from './CartList';
import EmptyText from '../ui/EmptyText/EmptyText';

const CartData = ({ cartItems, totalCount, totalPrice }) => {
  return(
    <div className='cart-data'>
        <div className='cart-data__info'>
          <span className='cart-data__info-text'>Quantity</span>
          <span className='cart-data__info-text'>Image</span>
          <span className='cart-data__info-text'>Name</span>
          <span className='cart-data__info-text'>Price</span>
          <span className='cart-data__info-text'>Delete</span>
        </div>
        <div className='cart-data__items'>
         {totalCount > 0 ?
          <CartList items={cartItems} /> :
          <EmptyText margin='20px 0'>No items in the cart</EmptyText>}
        </div>
      <div className='cart-data__total'>
        <p className='cart-data__total-text'><strong>{totalCount}</strong> items</p>
        <p className='cart-data__total-text'>Total: <strong>${totalPrice}</strong></p>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cartItems: selectCartItems(state),
    totalPrice: selectCartPrice(state),
    totalCount: selectCartCount(state)
  }
}

export default connect(mapStateToProps)(CartData);
