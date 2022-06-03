import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../redux/cart/cart-action-types';
import ActionButton from '../ui/ActionButton/ActionButton';
import './FoodItem.css';

const FoodItem = ({ id, name, image, price, size, link, catlink, addItem, history, match }) => {

  const itemLink = match.url.endsWith(`${catlink}`) ? `${match.url}/${link}` : `${match.url}/${catlink}/${link}`;

  return(
    <div className='food-item'>
       <img className='food-item__image' src={image} alt={name} />
       <h2 className='food-item__name' onClick={() => history.push(itemLink)}>{name}</h2>
       <div className='food-item__info'>
          <span className='food-item__size'>{size}</span>
          <h5 className='food-item__price'>${price}</h5>
       </div>
       <ActionButton width='100%' click={() => addItem({ id, name, image, price })}>Add to cart</ActionButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: (payload) => dispatch({ type: actionTypes.ADD_ITEM, payload })
  }
};

export default withRouter(connect(null, mapDispatchToProps)(FoodItem));
