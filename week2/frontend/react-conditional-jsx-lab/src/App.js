import UserGreeting from './UserGreeting';

function App() {
    return (
        <div className="App">
            <UserGreeting isLoggedIn={true} />
        </div>
    );
}

export default App;