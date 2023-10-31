function IdCard(props) {
  console.log(props); // Log the props object
  
  return (
      <div className="person">
          <h1>First name: {props.firstName}</h1>
          <p>Last name: {props.lastName}</p>
          <p>Gender {props.gender}</p>
      </div>
      
  );
}

export default IdCard;