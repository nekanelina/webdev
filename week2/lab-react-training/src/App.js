import IdCard from './components/IdCard';
import Greeting from './components/greeting';
import './App.css';
function App() {
    return (
        <div className="App">
             <IdCard
              lastName='Doe'
              firstName='John'
              gender='male'
              height={178}
              birth={new Date("1992-07-14")}
              picture="https://randomuser.me/api/portraits/men/44.jpg"
            />

            <IdCard
              lastName='Delores '
              firstName='Obrien'
              gender='female'
              height={172}
              birth={new Date("1988-05-11")}
              picture="https://randomuser.me/api/portraits/women/44.jpg"
            />
            <br></br>
            <Greeting lang="de" firstName="Josh" lastName="It"></Greeting>
            <Greeting lang="fr" firstName="Roland" lastName="Works"></Greeting>
            
        </div>
    );
}

export default App;