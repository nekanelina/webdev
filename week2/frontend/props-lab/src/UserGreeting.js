function UserGreeting(props) {
  const isLoggedIn = props.isLoggedIn;

  let greetingContent;
  if (isLoggedIn) {
      greetingContent = <h1>Welcome back, User!</h1>;
  } else {
      greetingContent = <h1>Please log in to continue</h1>;
  }

  return (
      <div>
          {greetingContent}
      </div>
  );
}

export default UserGreeting;