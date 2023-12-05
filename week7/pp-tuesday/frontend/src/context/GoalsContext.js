import { createContext, useContext, useReducer } from "react";

export const GoalsContext = createContext();

export const GoalsReducer = (state, action) => {
  switch (action.type) {
    case "SET_GOALS":
      return {
        goals: action.payload,
      };
    case "CREATE_GOAL":
      return {
        goals: [action.payload, ...state.goals],
      };
    case "DELETE_GOAL":
      return {
        goals: state.goals.filter((g) => g._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const GoalsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GoalsReducer, {
    goals: null,
  });

  const name = "eenemeenemineemo";

  return (
    <GoalsContext.Provider value={{ name }}>{children}</GoalsContext.Provider>
  );
  
};
