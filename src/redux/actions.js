export const addToCart = (card) => ({
  type: "ADD_TO_CART",
  payload: { card },
});

export const removeFromCart = (id) => ({
  type: "REMOVE_FROM_CART",
  payload: { id },
});

export const updateCartQuantity = (id, quantity) => ({
  type: "UPDATE_CART_QUANTITY",
  payload: { id, quantity },
});
