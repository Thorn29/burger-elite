import React from 'react';
import CartItem from './CartItem';

const CartList = ({ items, min }) => {
  return(
    <div style={{ width: '100%'}}>
      {items.map(item => <CartItem min={min} key={item.id} {...item} />)}
    </div>
  );
}

export default CartList;
