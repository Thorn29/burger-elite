import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../redux/cart/cart-action-types';
import Counter from '../ui/Counter/Counter';
import BurgerPreview from '../builder/BurgerPreview';
import './CartItem.css';

const CartItem = ({ min, id, name, image, price, quantity, custom, custing, seedStatus, increaseQuant, decreaseQuant, removeItem }) => {

  return(
    <div className={min ? 'cart-item cart-item--min' : 'cart-item'}>
        <span className='cart-item__quant'>
          {min ? `${quantity}` :
          <Counter leftClick={() => decreaseQuant(id)} rightClick={() => increaseQuant(id)}>
            {quantity}
          </Counter>}
        </span>
        {custom ?
        <div className='cart-item__custom-image'><BurgerPreview ingredients={custing} seedStatus={seedStatus} min /></div> :
        <img className='cart-item__image' src={image} alt={name} />}
        <h2 className='cart-item__name'>{name}</h2>
        <span className='cart-item__price'>${price}</span>
        <span className='cart-item__remove' onClick={() => removeItem(id)} >&#10005;</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    increaseQuant: (payload) => dispatch({type: actionTypes.INCREASE_QUANT, id: payload}),
    decreaseQuant: (payload) => dispatch({type: actionTypes.DECREASE_QUANT, id: payload}),
    removeItem: (payload) => dispatch({type: actionTypes.REMOVE_ITEM, id: payload})
  }
};

export default connect(null, mapDispatchToProps)(CartItem);
