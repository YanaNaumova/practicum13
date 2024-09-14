const productList = [
  { id: 1, productName: "Laptop", price: 999.99, quantity: 1 },
  { id: 2, productName: "Smartphone", price: 599.99, quantity: 1 },
  { id: 3, productName: "Headphones", price: 199.99, quantity: 1 },
  { id: 4, productName: "Smartwatch", price: 299.99, quantity: 1 },
  { id: 5, productName: "Keyboard", price: 49.99, quantity: 1 },
  { id: 6, productName: "Mouse", price: 29.99, quantity: 1 },
  { id: 7, productName: "Monitor", price: 149.99, quantity: 1 },
  { id: 8, productName: "Tablet", price: 399.99, quantity: 1 },
  { id: 9, productName: "Camera", price: 799.99, quantity: 1 },
  { id: 10, productName: "Speaker", price: 99.99, quantity: 1 },
  { id: 11, productName: "Charger", price: 19.99, quantity: 1 },
  { id: 12, productName: "External Hard Drive", price: 89.99, quantity: 1 },
  { id: 13, productName: "Printer", price: 129.99, quantity: 1 },
  { id: 14, productName: "Router", price: 69.99, quantity: 1 },
  { id: 15, productName: "Game Console", price: 499.99, quantity: 1 },
  { id: 16, productName: "Wireless Earbuds", price: 149.99, quantity: 1 },
  { id: 17, productName: "Smart TV", price: 799.99, quantity: 1 },
  { id: 18, productName: "Fitness Tracker", price: 99.99, quantity: 1 },
  { id: 19, productName: "Projector", price: 349.99, quantity: 1 },
  { id: 20, productName: "VR Headset", price: 399.99, quantity: 1 },
];

const initialState = {
  producteList: productList,
  shoppingBasket: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const productExistiert = state.shoppingBasket.some(
        (card) => card.id === action.payload.card.id
      );
      return {
        ...state,
        shoppingBasket: productExistiert
          ? state.shoppingBasket
          : [...state.shoppingBasket, action.payload.card],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        shoppingBasket: state.shoppingBasket.filter(
          (card) => card.id !== action.payload.id
        ),
      };
    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        shoppingBasket: state.shoppingBasket.map((card) =>
          card.id === action.payload.id
            ? { ...card, quantity: action.payload.quantity }
            : card
        ),
      };

    default:
      return state;
  }
};

export default productReducer;
