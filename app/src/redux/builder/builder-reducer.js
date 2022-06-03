import * as actionTypes from './builder-action-types';

const initialState = {
  ingredients: [
    {
    name: 'beef',
    amount: 0,
    price: .9,
    max: 3
  },
  {
    name: 'chicken',
    amount: 0,
    price: .9,
    max: 3
  },
  {
    name: 'cheese',
    amount: 0,
    price: 0.3,
    max: 4
  },
  {
    name: 'tomatoes',
    amount: 0,
    price: 0.3,
    max: 3
  },
  {
    name: 'bacon',
    amount: 0,
    price: 0.3,
    max: 2
  },
  {
    name: 'lettuce',
    amount: 0,
    price: 0.3,
    max: 3
  },
  {
    name: 'pickles',
    amount: 0,
    price: 0.2,
    max: 2
  },
  {
    name: 'onions',
    amount: 0,
    price: 0.3,
    max: 2
  },
  {
    name: 'ketchup',
    amount: 0,
    price: 0.05,
    max: 2
  },
  {
    name: 'mustard',
    amount: 0,
    price: 0.05,
    max: 2
  }],
seeds: false
};

const builderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_ING:
      return {...state, ingredients: state.ingredients.map(ing => ing.name === action.name && ing.amount < ing.max ? {...ing, amount: ing.amount + 1} : ing)};
    case actionTypes.DECREASE_ING:
      return {...state, ingredients: state.ingredients.map(ing => ing.name === action.name && ing.amount > 0 ? {...ing, amount: ing.amount - 1} : ing)};
    case actionTypes.RESET_ING:
      return {...state, ingredients: state.ingredients.map(ing => ({...ing, amount: 0}))};
    case actionTypes.TOGGLE_SEEDS:
      return {...state, seeds: !state.seeds}
    default:
    return state;
  }
}

export default builderReducer;
