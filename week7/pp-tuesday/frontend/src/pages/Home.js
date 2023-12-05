// components
import { set } from "mongoose";
import GoalDetails from "../components/GoalDetails";
import GoalForm from "../components/GoalForm";
import { useEffect, useState } from "react";
import { useGoalsContext } from "../hooks/useGoals";
import { useContext } from "react";
import { GoalsContext } from "../context/GoalsContext";

const Home = () => {
  const { name } = useContext(GoalsContext);
  console.log(name);
  const dispatch = "asd";
  const fetchGoals = async () => {
    const response = await fetch("/api/goals", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    const json = await response.json();
    // if (!response.ok) {
    //   console.log(json.error);
    //   dispatch({ type: "SET_ERROR", payload: json.error });
    //   return;
    // }
    if (response.ok) {
      dispatch({ type: "SET_GOALS", payload: json });
    }
  };
  useEffect(() => {
    // fetchGoals();
    // const interval = setInterval(fetchGoals, 1000);
    // return () => clearInterval(interval);
  }, [dispatch]);
  return (
    <>
      <div className="home">
        <div className="goals">
          {/* {goals.length === 0 && <h2>No Goals Found</h2>}
        {goals.map((goal) => ( */}
          {/* <GoalDetails key={goal._id} goal={goal} /> */}
          ))
        </div>
        <GoalForm />
      </div>
    </>
  );
};

export default Home;
