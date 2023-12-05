import { useReducer } from "react";
import "./App.css";

// Define an initial state
const initialState = {
  items: [],
  total: 0,
};

// Define a reducer function
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const nextItemId = state.items.length + 1;
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: nextItemId,
            ...action.payload,
          },
        ],
        total: state.total + action.payload.price,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price,
      };
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
}

function ShoppingCart() {
  // Use useReducer to manage state and dispatch
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const handleAddItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const handleRemoveItem = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="shopping-cart">
      <h1 className="h1">Shopping Cart</h1>

      <button onClick={() => handleAddItem({ name: "Apple", price: 1 })}>
        Add Apple
      </button>
      <button onClick={() => handleAddItem({ name: "Orange", price: 2 })}>
        Add Orange
      </button>
      <button onClick={handleClearCart}>Clear cart</button>

      <p>Total: ${cart.total}</p>

      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button
              className="del-button"
              onClick={() => handleRemoveItem(item)}
            >
              Del
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
