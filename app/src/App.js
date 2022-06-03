import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actionTypes from './redux/auth/auth-action-types';
import { selectUser } from './redux/auth/auth-selector';
import Loader from './components/ui/Loader/Loader';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Cart from './pages/Cart';
import Food from './pages/Food';
import Builder from './pages/Builder';
import Orders from './pages/Orders';
import About from './pages/About';
import ErrorPage from './pages/Error';
import './App.css';

const App = ({ user, dispatch }) => {

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    const noUser = () => {
      localStorage.clear();
      dispatch({ type: actionTypes.ADD_USER, payload: {}});
      setLoading(false);
    };

    if (!token) return noUser();
      axios.get('/user', { headers: { Authorization: `Bearer ${token}` }})
      .then(res => {
        dispatch({ type: actionTypes.ADD_USER, payload: { id: res.data.id, name: res.data.username }});
        setLoading(false);
      })
      .catch(err => noUser());
  }, [dispatch]);

  if (isLoading) return <div className='page'><Loader /></div>

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Navigation />
          <Switch>
            <Route path='/sign_in' component={SignIn} />
            <Route path='/sign_up' component={SignUp} />
            <Route path='/cart' component={Cart} />
            <Route path='/food' component={Food} />
            <Route path='/builder' component={Builder} />
            <Route exact path='/orders' component={Orders} />
            <Route exact path='/about' component={About} />
            <Redirect exact from='/' to='/food' />
            <Route component={ErrorPage} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = state => {
  return {
    user: selectUser(state)
  }
}

export default connect(mapStateToProps)(App);
