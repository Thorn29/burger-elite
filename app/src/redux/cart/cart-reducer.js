import { addItem } from './cart-utils';
import * as actionTypes from './cart-action-types';

const initialState = {
  dropdownIsVisible: false,
  cart: []
}

const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {...state, cart: addItem(state.cart, action.payload), dropdownIsVisible: true};
    case actionTypes.TOGGLE_DROPDOWN:
      return {...state, dropdownIsVisible: !state.dropdownIsVisible};
    case actionTypes.INCREASE_QUANT:
      return {...state, cart: state.cart.map(item => item.id === action.id ? {...item, quantity: item.quantity + 1} : item)};
    case actionTypes.DECREASE_QUANT:
      return {...state, cart: state.cart.map(item => item.id === action.id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item)};
    case actionTypes.REMOVE_ITEM:
      return {...state, cart: state.cart.filter(item => item.id !== action.id)};
    case actionTypes.EMPTY_CART:
      return {...state, cart: []};
    default:
      return state;
  }
};

export default cartReducer;
