function Greeting(props) {
  console.log(props); // Log the props object
  
  return (
      <div className="greeting">
          <h1>Welcome, {props.name}!</h1>
          <p>{props.message}</p>
      </div>
  );
}

export default Greeting;