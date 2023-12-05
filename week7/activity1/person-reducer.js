// Define an initial state for the user
const initialState = {
  name: "Mark",
  email: "mark@gmail.com",
  age: 30,
};

// Define a reducer-like function for managing user data
function personReducer(state, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload.name };
    case "CHANGE_EMAIL":
      return { ...state, email: action.payload.email };
    case "CHANGE_AGE":
      return { ...state, age: action.payload.age };
    default:
      return state;
  }
}

// Create actions to change the user's email and age
const changeEmailAction = {
  type: "CHANGE_EMAIL",
  payload: { email: "mark@compuserve.com" },
};

const changeAgeAction = {
  type: "CHANGE_AGE",
  payload: { age: 35 },
};

// Apply the actions to the user state using the reducer
const updatedUserState = personReducer(initialState, changeEmailAction);
const updatedUserState2 = personReducer(updatedUserState, changeAgeAction);

console.log("Updated User State (after changing email and age):");
console.log(updatedUserState2);
