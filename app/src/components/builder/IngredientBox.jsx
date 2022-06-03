import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../redux/builder/builder-action-types';
import Counter from '../ui/Counter/Counter';
import './IngredientBox.css';

const IngredientBox = ({ name, amount, max, increaseAmount, decreaseAmount }) => {
  return(
    <div className='ingredient-box'>
      <h2 className='ingredient-box__name'>{name}</h2>
      <Counter rightClick={() => increaseAmount(name)} leftClick={() => decreaseAmount(name)} rightDisable={amount === max} leftDisable={amount === 0}>{amount}</Counter>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    increaseAmount: (payload) => dispatch({ type: actionTypes.INCREASE_ING, name: payload}),
    decreaseAmount: (payload) => dispatch({ type: actionTypes.DECREASE_ING, name: payload})
  }
}

export default connect(null, mapDispatchToProps)(IngredientBox);
