import React from 'react';
import { withRouter } from 'react-router-dom';
import FoodItem from './FoodItem';
import PgLink from '../ui/PgLink/PgLink';
import './FoodPreview.css';

const FoodPreview = ({ category, link, items, match, history, short }) => {

  return(
    <div className={short ? 'preview preview--short' : 'preview'}>
      <h2 onClick={() => short && history.push(`${match.url}/${link}`)} className='preview__title'>{category}</h2>
      <div className='preview__items'>
        {items.map(item => <FoodItem key={item.id} catlink={link} {...item} />)}
        {short && <PgLink url={`${match.url}/${link}`} buttontext='Full offer'>Make sure to check out the entire category!</PgLink>}
      </div>
    </div>
  );
};

export default withRouter(FoodPreview);
