export const addItem = (cartContent, newItem) => {

  const duplicate = cartContent.find(item => item.id === newItem.id);

  if (duplicate) {
    return cartContent.map(item => item.id === duplicate.id ? {...item, quantity: item.quantity + 1} : item)
  }

  return [...cartContent, {...newItem, quantity: 1}];
};
