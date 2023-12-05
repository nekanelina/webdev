// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const goalDelete = (id) => {
  const data =fetch(`/api/goals/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

const GoalDetails = ({ goal }) => {
  return (
    <div className="goal-details">
      <h4>{goal.title}</h4>
      <p>
        {formatDistanceToNow(new Date(goal.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={()=>{goalDelete(goal._id)}}>delete</span>
    </div>
  );
};

export default GoalDetails;
