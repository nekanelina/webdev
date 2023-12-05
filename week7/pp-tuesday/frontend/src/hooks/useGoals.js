import { GoalsContext } from "../context/GoalsContext";
import { useContext } from "react";

export const useGoalsContext = () => {
  const context = useContext(GoalsContext);
  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider"
    );
  }

  return context;
};
