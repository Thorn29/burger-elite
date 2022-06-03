import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import FoodPreview from './FoodPreview';
import BackBar from '../ui/BackBar/BackBar';
import NotFound from '../basic/NotFound';
import Loader from '../ui/Loader/Loader';
import PgLink from '../ui/PgLink/PgLink';
import './FoodCategory.css';

const FoodCategory = ({ match, history }) => {

  const [category, setCategory] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { categoryId } = match.params;

  useEffect(() => axios.get(`/food/${categoryId}/preview`)
  .then(response => {
    setCategory(response.data);
    setLoading(false);
  })
  .catch(err => {
    setError(err.response.data);
    setLoading(false);
  }), [categoryId]);

  if (isLoading) return <Loader />;
  if (error) return <div className='center'><NotFound button='Go to Food page' click={() => history.push('/food')} desc={error} /></div>;
  return(
    <div className='food-category'>
      <BackBar />
      <FoodPreview category={category.category} link={category.link} items={category.items} />
      {categoryId === 'burgers' && <PgLink url='/builder' buttontext='Try it'>You can also build a custom burger!</PgLink>}
    </div>
  );
};

export default withRouter(FoodCategory);
