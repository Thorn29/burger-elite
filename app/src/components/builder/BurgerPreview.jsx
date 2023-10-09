import React from 'react';
import { connect } from 'react-redux';
import { selectIngredientCount, selectSeeds } from '../../redux/builder/builder-selector';
import Ingredient from './Ingredient';
import EmptyText from '../ui/EmptyText/EmptyText';
import './BurgerPreview.css';

const BurgerPreview = ({ ingredients, ingCount, seeds, seedStatus, min }) => {

  return(
    <div className={min ? 'burger-preview burger-preview--min' : 'burger-preview'}>
      {((!min && seeds) || (min && seedStatus)) && <span className='burger-preview__seeds' />}
      {ingCount === 0 && !min ?
       <EmptyText margin='10px 0' rotate='rotate(180deg)'>Start building your burger!</EmptyText> :
       ingredients.map(ing => [...Array(ing.amount)].map((el, idx) => <Ingredient key={`${ing.name}${idx}`} type={ing.name} />))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ingCount: selectIngredientCount(state),
    seeds: selectSeeds(state)
  }
};

export default connect(mapStateToProps)(BurgerPreview);
