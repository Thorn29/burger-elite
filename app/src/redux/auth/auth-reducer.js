import * as actionTypes from './auth-action-types';

const initialState = {
  user: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {...state, user: action.payload};
    default:
      return state;
  }
};

export default authReducer;
