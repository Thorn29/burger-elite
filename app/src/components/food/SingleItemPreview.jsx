import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionTypes from '../../redux/cart/cart-action-types';
import ActionButton from '../ui/ActionButton/ActionButton';
import BackBar from '../ui/BackBar/BackBar';
import NotFound from '../basic/NotFound';
import Loader from '../ui/Loader/Loader';
import './SingleItemPreview.css';

const SingleItemPreview = ({ history, match, onAddItem }) => {

  const [ item, setItem ] = useState({});
  const [ isLoading, setLoading ] = useState(true);
  const [ error, setError ] = useState('');
  const { categoryId, itemId } = match.params;

  useEffect(() => axios.get(`/food/${categoryId}/${itemId}/preview`)
  .then(response => {
    setItem(response.data);
    setLoading(false);
  })
  .catch(err => {
    setError(err.response.data);
    setLoading(false);
  }), [categoryId, itemId]);

  if (isLoading) return <Loader />;
  if (error) return <div className='center'><NotFound button='Go to Food page' click={() => history.push('/food')} desc={error} /></div>;
  return(
    <div className='item-preview'>
      <div className='item-preview__image-container'>
        <img className='item-preview__image' src={item.image} alt={item.name} />
      </div>
      <div className='item-preview__data'>
        <h1 className='item-preview__name'>{item.name}</h1>
        {item.ingredients &&
          <>
            <p className='item-preview__text'><strong>Ingredients</strong></p>
            <ul className='item-preview__list'>
              {item.ingredients.map(ing => <li key={ing} className='item-preview__ingredient'>{ing}</li>)}
            </ul>
          </>}
        <p className='item-preview__text'><strong>Size: </strong>{item.size}</p>
        <p className='item-preview__text'><strong>Price: </strong>${item.price}</p>
        <ActionButton click={() => onAddItem({ id: item.food_id, name: item.name, image: item.image, price: item.price })}>Add to cart</ActionButton>
        <BackBar />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: (payload) => dispatch({ type: actionTypes.ADD_ITEM, payload })
  }
};

export default withRouter(connect(null, mapDispatchToProps)(SingleItemPreview));
