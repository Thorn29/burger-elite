import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { selectUser } from '../redux/auth/auth-selector';
import * as actionTypes from '../redux/auth/auth-action-types';
import { validateSignUp } from '../assets/forms/validation';
import Form from '../components/ui/Form/Form';
import Head from '../components/Head';

class SignUp extends Component {

state = {
  fields: [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
      required: true
    },
    {
      label: 'E-Mail',
      name: 'email',
      type: 'email',
      required: true
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      required: true
    },
    {
      label: 'Confirm password',
      name: 'confirm',
      type: 'password',
      required: true
    }
  ],
  inputs: {
    name: '',
    email: '',
    password: '',
    confirm: ''
  },
  errors: {
    name: '',
    email: '',
    password: '',
    confirm: ''
  }
}

render() {

  const { fields, inputs, errors } = this.state;
  const { user, dispatch } = this.props;

const inputChangeHandler = (e) => {
  this.setState({inputs: {...inputs, [e.target.name]: e.target.value}})
};

const setLastError = (msg) => {
  this.setState({ errors: {...errors, confirm: msg}});
};

const formSubmitHandler = (e) => {
  e.preventDefault();
  const validationError = validateSignUp(inputs);

  if (validationError) return this.setState({ errors: {...this.state.errors, [validationError.error]: validationError.message}});

  axios.post('/signup', { name: inputs.name, email: inputs.email, password: inputs.password })
  .then(data => {
    localStorage.setItem('token', JSON.stringify(data.data.token));
    dispatch({ type: actionTypes.ADD_USER, payload: { id: data.data.id, username: data.data.username } })
  })
  .catch(err => setLastError(`${err.response.data}`));
}

  if (user.username) return <Redirect to='/' />;
  return(
    <div className='page center'>
    <Head title='Sign Up' />
      <Form inputChange={inputChangeHandler} title='Sign up' fields={fields} submit={formSubmitHandler} errors={errors} />
    </div>
  );
}
};

const mapStateToProps = state => {
  return {
    user: selectUser(state)
  }
}



export default connect(mapStateToProps)(SignUp);
