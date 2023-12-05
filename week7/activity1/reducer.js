// Define an initial state
const initialState = { count: 0 };

// Define a reducer-like function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Example usage
let currentState = initialState;
console.log(currentState); // { count: 0 }

currentState = reducer(currentState, { type: "INCREMENT" });
console.log(currentState); // { count: 1 }

currentState = reducer(currentState, { type: "DECREMENT" });
console.log(currentState); // { count: 0 }
