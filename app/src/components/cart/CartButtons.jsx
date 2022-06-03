import React from 'react';
import { connect } from 'react-redux';
import * as cartActionTypes from '../../redux/cart/cart-action-types';
import ActionButton from '../ui/ActionButton/ActionButton';

const CartButtons = ({ emptyCart, callCheckout}) => {

  const styles = { display: 'flex', justifyContent: 'center' };

  return(
    <div style={styles}>
      <ActionButton click={emptyCart}>Empty</ActionButton>
      <ActionButton click={callCheckout}>Checkout</ActionButton>
    </div>  
  );
};

const mapDispatchToProps = dispatch => {
  return {
    emptyCart: () => dispatch({type: cartActionTypes.EMPTY_CART})
  }
};

export default connect(null, mapDispatchToProps)(CartButtons);
