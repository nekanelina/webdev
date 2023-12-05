import useField from "../hooks/useField";
import { useState,useEffect} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import useAddGoal from "../hooks/useAddGoal";
const GoalForm = () => {
  const goal = useField("text");
  const [popupOpen,setPopup]= useState(false);
  const {addGoal,isLoading,error} = useAddGoal("/api/goals");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addGoal({ title: goal.value,time: new Date()});
    setPopup(true);
  };
  useEffect(() => {
    if(!isLoading&&!error){
      setPopup(false);
    }
  }, [isLoading]);
  
  return (
    <>
    <form onSubmit={handleFormSubmit} className="create">
      <h3>Add a New Goal</h3>

      <label>Text:</label>
      <input {...goal} className="" />
      <button>Add Goal</button>
    </form>
    {popupOpen&&<><div className="overlay"></div>
  <div className="popup">
    <button className={"back-btn"} onClick={()=>{setPopup(!popupOpen)}}>
    <i className="fa-solid fa-arrow-left"></i> Back
        </button>
      <ClipLoader
        color={"#36d7b7"}
        loading={isLoading}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        {!isLoading&&error&&<><h2>Something went wrong!</h2>
        <p>{error}</p></>}
    </div></>}
    </>
  );
};

export default GoalForm;
