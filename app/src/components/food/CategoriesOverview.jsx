import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoodPreview from './FoodPreview';
import EmptyText from '../ui/EmptyText/EmptyText';
import Loader from '../ui/Loader/Loader';

const CategoriesOverview = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('/food/all')
    .then(response => {
      setItems(response.data);
      setLoading(false);
    })
    .catch(err => {
      console.log(err.response);
      setError(err.response.data);
      setLoading(false);
    })}, []);

  if (isLoading) return <Loader/>;
  if (error) return <EmptyText>{error}</EmptyText>;
  return(
    <div>
      {items.map(category => <FoodPreview short={true} key={category.id} {...category} />)}
    </div>
  );
}

export default CategoriesOverview;
