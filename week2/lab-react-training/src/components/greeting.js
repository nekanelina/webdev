function Greeting(props) {
  console.log(props); // Log the props object
  
  return (
      <div className="greeting">
          <p>Hello! {props.firstName} {props.lastName}</p>
      </div>
      
  );
}

export default Greeting;