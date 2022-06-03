import { combineReducers } from 'redux';
import cartReducer from './cart/cart-reducer';
import builderReducer from './builder/builder-reducer';
import ordersReducer from './orders/orders-reducer';
import authReducer from './auth/auth-reducer';

export default combineReducers({
  cart: cartReducer,
  builder: builderReducer,
  orders: ordersReducer,
  auth: authReducer
});
