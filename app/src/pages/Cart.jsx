import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { selectCartCount } from '../redux/cart/cart-selector';
import { selectUser } from '../redux/auth/auth-selector';
import * as actionTypes from '../redux/auth/auth-action-types';
import Checkout from '../components/cart/Checkout';
import CartData from '../components/cart/CartData';
import CartButtons from '../components/cart/CartButtons';
import Loader from '../components/ui/Loader/Loader';
import BackBar from '../components/ui/BackBar/BackBar';
import Head from '../components/Head';


const Cart = ({ cartCount, history, dispatch, location, user }) => {

  const [checkoutIsOpen, setCheckoutStatus] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    const clearUser = () => {
      localStorage.clear();
      dispatch({ type: actionTypes.ADD_USER, payload: {}});
      return history.push('/sign_in', { from: location.pathname });
    };

    if (!token) return clearUser();
      axios.get('/user', { headers: { Authorization: `Bearer ${token}` }})
      .then(res => {
        dispatch({ type: actionTypes.ADD_USER, payload: res.data });
        setLoading(false);
      })
      .catch(err => clearUser());
  }, [dispatch, history, location]);

  const toggleCheckout = () => setCheckoutStatus(checkoutIsOpen => !checkoutIsOpen);
  const redirectPage = () => history.push('/orders');


  if (isLoading) return <div className='page'><Loader /></div>;
  return(
    <div className='page'>
    <Head title='Cart' />
      {checkoutIsOpen && <Checkout close={toggleCheckout} redirect={redirectPage} user={user} />}
      <BackBar />
      <h2 className='page_title'>Cart</h2>
      <CartData />
      {cartCount > 0 && <CartButtons callCheckout={toggleCheckout} />}
    </div>
  );
};



const mapStateToProps = state => {
  return {
    cartCount: selectCartCount(state),
    user: selectUser(state)
  }
};

export default connect(mapStateToProps)(Cart);
