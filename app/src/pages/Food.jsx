import React from 'react';
import { Route } from 'react-router-dom';
import CategoriesOverview from '../components/food/CategoriesOverview';
import FoodCategory from '../components/food/FoodCategory';
import SingleItemPreview from '../components/food/SingleItemPreview';
import Head from '../components/Head';

const Food = ({ match }) => {

  return(
    <div className='page'>
    <Head title='Food'>Browse our catalogue of various fast food such as burgers, pizza, nuggets & more</Head>
      <Route exact path={`${match.path}`} component={CategoriesOverview} />
      <Route exact path={`${match.path}/:categoryId`} component={FoodCategory} />
      <Route exact path={`${match.path}/:categoryId/:itemId`} component={SingleItemPreview} />
    </div>
  );
}

export default Food;
