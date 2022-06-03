import React from 'react';
import './Order.css';

const Order = ({ number, user, name, date, items, price }) => {

  return(
    <div className='order'>
    <p className='order__number'>Order #{number + 1}</p>
    <div className='order__body'>
      <ul className='order__data'>
        {items.map(item => <li className='order__item' key={item.replace(' ','')}>{item}</li>)}
      </ul>
      <div className='order__price'>
        <span className='order__number-text'>Total</span>
        ${price}
      </div>
    </div>
      <div className='order__bottom'>
          <p className='order__bottom-text'>Ordered by {user}</p>
          <p className='order__bottom-text'>{date.replace(/T.*/,'').split('-').reverse().join('/')}</p>
      </div>
    </div>
  );
}

export default Order;
