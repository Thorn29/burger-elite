import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { selectCartItems, selectCartPrice } from '../../redux/cart/cart-selector';
import * as actionTypes from '../../redux/cart/cart-action-types';
import { validateCheckout } from '../../assets/forms/validation';
import Form from '../ui/Form/Form';
import Modal from '../ui/Modal/Modal';
import InfoBox from '../ui/InfoBox/InfoBox';

class Checkout extends Component {

  state = {
    fields: [
      {
        label: 'Full name',
        name: 'fullname',
        type: 'text',
        required: true
      },
      {
        label: 'Address',
        name: 'address',
        type: 'text',
        required: true
      },
      {
        label: 'ZIP code',
        name: 'zipcode',
        type: 'number',
        required: true
      }
    ],
    inputs: {
      fullname: '',
      address: '',
      zipcode: ''
    },
    errors: {
      fullname: '',
      address: '',
      zipcode: ''
    },
    success: false,
    error: false
  };

  render() {

    const { cartItems, cartPrice, redirect, close, user, dispatch } = this.props;
    const { fields, inputs, errors, success, error } = this.state;

    const inputChangeHandler = (e) => this.setState({inputs: {...inputs, [e.target.name]: e.target.value}});

    const formSubmitHandler = (e) => {
      e.preventDefault();
      const validationError = validateCheckout(inputs);

      if (validationError) { this.setState({ errors: {...errors, [validationError.error]: validationError.message}})}

      else {
          const itemsText = cartItems.map(item => {
            let custom = '';
            if (item.custing) {
              custom = ' - ' + item.custing.map(ing => `${ing.amount} x ${ing.name}`);
            }
            return `${item.quantity} x ${item.name} ${custom}`;
          });

          const order = {
            name: inputs.fullname,
            address: inputs.address,
            zipcode: inputs.zipcode,
            date: (new Date ()).toISOString(),
            items: itemsText,
            price: cartPrice,
            user_id: user.id
          };

          axios.post('/orders/new', { order: order }).then(response => {
            this.setState({ inputs: {fullname: '', address: '', zipcode: ''}, success: true});
            dispatch({type: actionTypes.EMPTY_CART});
          }).catch(err => this.setState({ error: true }));

        }
    };

  if (success) return <Modal><InfoBox buttontext='OK' click={redirect}>Order submitted successfully!</InfoBox></Modal>;
  if (error) return <Modal><InfoBox buttontext='OK' click={close}>Something went wrong, please try again later</InfoBox></Modal>;

    return(
      <Modal clickBack={close}>
        <Form title={`${user.username}'s order `} fields={fields} inputChange={inputChangeHandler} submit={formSubmitHandler} errors={errors} />
      </Modal>
    );
  }
};

const mapStateToProps = state => {
  return {
    cartItems: selectCartItems(state),
    cartPrice: selectCartPrice(state)
  }
};

export default connect(mapStateToProps)(Checkout);
