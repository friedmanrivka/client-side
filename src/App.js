
import './App.css';
import VolunteersComponent from './Project/Volunteers/VoluntterComponent.js'; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Connect4Solisers</h1>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <VolunteersComponent></VolunteersComponent>
          </div>
       
        </a>
      </header>
    </div>
  );
}

export default App;
