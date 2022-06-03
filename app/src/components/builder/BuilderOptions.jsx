import React from 'react';
import IngredientBox from './IngredientBox';
import './BuilderOptions.css';

const BuilderOptions = ({ ingredients }) => {
  return(
    <div className='builder-options'>
      {ingredients.map(ing => <IngredientBox key={`${ing.name}${ing.amount}`} name={ing.name} amount={ing.amount} max={ing.max} />)}
    </div>
  );
}

export default BuilderOptions;
