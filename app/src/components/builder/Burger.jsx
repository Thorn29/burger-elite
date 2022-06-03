import React from 'react';
import { connect } from 'react-redux';
import { selectIngredients, selectIngredientTotalPrice } from '../../redux/builder/builder-selector';
import BurgerPreview from './BurgerPreview';
import './Burger.css';

const Burger = ({ ingredients, ingredientsPrice }) => {

  return(
    <div className='burger'>
      <BurgerPreview ingredients={ingredients} />
      <span className='burger__price'>${ingredientsPrice}</span>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ingredients: selectIngredients(state),
    ingredientsPrice: selectIngredientTotalPrice(state)
  }
};

export default connect(mapStateToProps)(Burger);
