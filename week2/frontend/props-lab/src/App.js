import WelcomeMessage from './WelcomeMessage';

function App() {
    return (
        <div className="App">
            <WelcomeMessage name="Alice" message="This is a welcome message">
                <p>This is some additional JSX passed as children.</p>
            </WelcomeMessage>
        </div>
    );
}

export default App;