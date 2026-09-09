import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Deepa";

  function handleNameChange() {
    const names = ["Earn", "Grow", "Give"];
    const num = Math.floor(Math.random() * 3);
    return names[num];
  }
  
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
        <p>{name}</p>{" "}
        {/*Here the curly braces are used to treat the var name as js var */}
        {/*React cannot take objects,boolean values as child*/}
        <p>Let's {handleNameChange()} Money</p>
      </header>
    </div>
  );
}

export default App;
