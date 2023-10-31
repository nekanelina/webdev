// Defining a functional component with props
function WelcomeMessage(props) {
  return (
      <div>
          <h1>Welcome, {props.name}!</h1>
          <p>{props.message}</p>
          {props.children}
      </div>
  );
}

export default WelcomeMessage;