import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.cart);

export const selectCartCount = createSelector([selectCartItems], cartItems => cartItems.reduce((acc, item) => acc + item.quantity, 0));

export const selectCartPrice = createSelector([selectCartItems], cartItems => cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0).toFixed(2));

export const selectDropdown = createSelector([selectCart], cart => cart.dropdownIsVisible);
