const express = require('express');
const router = new express.Router();
const db = require('../db/database');

router.get('/orders/all', (req, res) => {
  db('orders').select('users.username', 'orders.*').join('users', 'orders.user_id', 'users.id')
  .then(ord => res.send(ord))
  .catch(err => res.status(500).send('Orders not available, please try again later'));
});

router.post('/orders/new', (req, res) => {
  const { name, address, zipcode, price, date, items, user_id } = req.body.order;
  db('orders').returning('*').insert({ name, address, zipcode, price, date, items, user_id })
  .then(response => res.send(response))
  .catch(err => res.status(400).send('Error: ordering unsuccessful'));
});

router.get('/food/all', (req, res) => {
  db(db('categories').join('food', 'categories.id', 'food.catg_id').select('*').rowNumber('rank', 'food.food_id', 'categories.id').as('previews')).where('rank', '<=', 4)
  .then(data => {
    const sortedData = data.reduce((acc, item) => {
      const match = acc.find(group => group.category === item.cat_name);

      if (match) {
        match.items.push({
          id: item.food_id,
          name: item.name,
          size: item.size,
          ingredients: item.ingredients,
          price: item.price,
          image: item.image,
          link: item.link
        })
      }

      else {
        acc.push({
          id: item.id,
          category: item.cat_name,
          link: item.cat_link,
          items: [{
            id: item.food_id,
            name: item.name,
            size: item.size,
            ingredients: item.ingredients,
            price: item.price,
            image: item.image,
            link: item.link
          }]
        });
      }

      return acc;
    }, []);

    res.status(200).send(sortedData);
  })
  .catch(err => res.status(400).send(err));
});

router.get('/food/:category/preview', (req, res) => {
  const { category } = req.params;

  db('categories').join('food', 'categories.id', 'food.catg_id').select('*').where({ cat_link: category})
  .then(data => {
    if (data.length <= 0) reject();
    const items = [];

    data.map(item => items.push({
      id: item.food_id,
      name: item.name,
      size: item.size,
      ingredients: item.ingredients,
      price: item.price,
      image: item.image,
      link: item.link
    }));

    const sortedData = {
      category: data[0].cat_name,
      link: data[0].cat_link,
      items: items
    }

    res.status(200).send(sortedData);
  })
  .catch(err => res.status(400).send('Category not available'));
});

router.get('/food/:category/:id/preview', (req, res) => {
  const { category, id } = req.params;

  db('food').select('*').where({ link: id })
  .then(item => {
    if (item.length === 0) reject();
    res.status(200).send(item[0])})
  .catch(err => res.status(400).send('Item data not available'));
});

module.exports = router;
