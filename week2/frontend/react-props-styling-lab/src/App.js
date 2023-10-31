import Greeting from './Greeting';
import './App.css'; // Import CSS file

function App() {
    return (
        <div className="App">
            <Greeting name="Alice" message="Welcome to the lab!" />
             <Greeting name="Bob" message="Good morning" />
        </div>
    );
}

export default App;