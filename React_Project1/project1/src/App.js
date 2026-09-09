import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import './App.css';

function App() {
  const name = "Deepa";

  return (
    <div className="App">
      <p>Hi {name}</p>{" "}
      {/*Here the curly braces are used to treat the var name as js var */}
      {/*React cannot take objects,boolean values as child*/}

      {/* Insert the components */}
     <Header/>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;
