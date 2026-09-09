import Header from "./Header";
import Content from "./Content";

function App() {
  const name = "Deepa";

  return (
    <div>
      <p>Hi {name}</p>{" "}
      {/*Here the curly braces are used to treat the var name as js var */}
      {/*React cannot take objects,boolean values as child*/}

      {/* Insert the components */}
     <Header/>
     <Content/>
    </div>
  );
}

export default App;
