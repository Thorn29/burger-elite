import React from 'react';
import { connect } from 'react-redux';
import { selectIngredients, selectSeeds, selectIngredientTotalPrice } from '../../redux/builder/builder-selector';
import * as cartActionTypes from '../../redux/cart/cart-action-types';
import * as builderActionTypes from '../../redux/builder/builder-action-types';
import ActionButton from '../ui/ActionButton/ActionButton';
import BuilderCheckbox from './BuilderCheckbox';
import BuilderOptions from './BuilderOptions';
import './BuilderControls.css';

const BuilderControls = ({ ingredients, totalPrice, seeds, resetIng, addToCart, toggleSeeds }) => {

  const addedIngredients = ingredients.filter(ing => ing.amount > 0);

  return(
    <div className='builder-controls'>
      <BuilderCheckbox checked={seeds} change={toggleSeeds} />
      <BuilderOptions ingredients={ingredients} />
      <div className='builder-controls__buttons'>
        <ActionButton minwidth='11rem' click={resetIng}>Reset</ActionButton>
        <ActionButton minwidth='11rem'
          click={() => addToCart({
            custom: true,
            id: `${seeds && 'seeds'}${ingredients.map(ing => `${ing.name}${ing.amount}`).join(' ')}`,
            name: 'Custom burger',
            custing: addedIngredients,
            price: totalPrice,
            seedStatus: seeds})}
          disable={addedIngredients.length === 0}>
          Add to cart
        </ActionButton>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ingredients: selectIngredients(state),
    totalPrice: selectIngredientTotalPrice(state),
    seeds: selectSeeds(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetIng: () => dispatch({ type: builderActionTypes.RESET_ING}),
    addToCart: (payload) => dispatch({type: cartActionTypes.ADD_ITEM, payload}),
    toggleSeeds: () => dispatch({type: builderActionTypes.TOGGLE_SEEDS})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuilderControls);
