import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectUser } from '../../redux/auth/auth-selector';
import * as actionTypes from '../../redux/auth/auth-action-types';
import { ReactComponent as SignInIcon } from'../../assets/icons/enter.svg';
import { ReactComponent as SignOutIcon } from'../../assets/icons/exit.svg';
import './AuthButton.css';

const AuthButton = ({ history, user, dispatch }) => {

  const signOut = () => {
    localStorage.clear();
    dispatch({ type: actionTypes.ADD_USER, payload: {}});
    history.push('/');
  };

  const SignInButton = (
    <div className='auth-button' onClick={() => history.push('/sign_in')}>
      <button className='auth-button__button'>
        <SignInIcon className='auth-button__icon' />
        <p className='auth-button__text'>Sign In</p>
      </button>
    </div>
  );

  const SignOutButton = (
    <div className='auth-button' onClick={() => signOut()}>
      <p className='auth-button__username'>{user.username}</p>
      <button className='auth-button__button'>
        <SignOutIcon className='auth-button__icon' />
        <p className='auth-button__text'>Sign Out</p>
      </button>
    </div>
  );

  if (user.username) return SignOutButton;
  else return SignInButton;
};

const mapStateToProps = state => {
  return {
    user: selectUser(state)
  }
};

export default withRouter(connect(mapStateToProps)(AuthButton));
