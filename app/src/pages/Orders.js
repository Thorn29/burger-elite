import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { selectAllOrders } from '../redux/orders/orders-selector';
import * as actionTypes from '../redux/orders/orders-action-types';
import Order from '../components/basic/Order';
import EmptyText from '../components/ui/EmptyText/EmptyText';
import Loader from '../components/ui/Loader/Loader';
import Head from '../components/Head';

const Orders = ({ allOrders, dispatch }) => {

  const [ isLoading, setLoading ] = useState(true);
  const [ error, setError ] = useState('');

  useEffect(() => axios.get('/orders/all')
  .then(orders => {
    orders.data.map(ord => dispatch({ type: actionTypes.NEW_ORDER, payload: ord }));
    setLoading(false);
  })
  .catch(err => {
    setError(err.response.data);
    setLoading(false);
  }), [dispatch]);


  if (isLoading) return <div className='page'><Loader/></div>;
  if (error) return <div className='page'><EmptyText>{error}</EmptyText></div>;
  if (allOrders.length === 0) return <div className='page'><EmptyText>No pending orders</EmptyText></div>;
  return(
    <div className='page'>
    <Head title='Orders' />
      <h2 className='page_title'>Orders</h2>
     {allOrders.map((order, idx) =>
      //idx added to key to enable duplicate orders
      <Order
      key={`${order.date}${order.name}${order.items}${idx}`}
      number={idx}
      user={order.username}
      name={order.name}
      date={order.date}
      items={order.items}
      price={order.price} /> )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    allOrders: selectAllOrders(state)
  }
}

export default connect(mapStateToProps)(Orders);
