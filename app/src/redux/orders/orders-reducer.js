const initialState = {
  orders: []
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_ORDER':
      const duplicate = state.orders.find(order => JSON.stringify(order) === JSON.stringify(action.payload));

      if (duplicate) {
        return state;
      }
     else return {...state, orders: [...state.orders, action.payload]};
    default:
    return state;
  }
};

export default ordersReducer;
