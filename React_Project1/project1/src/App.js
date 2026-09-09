import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Deepa";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{name}</p> {/*Here the curly braces are used to treat the var name as js var */}
        {/*React cannot take objects,boolean values as child*/}
      </header>
    </div>
  );
}

export default App;
