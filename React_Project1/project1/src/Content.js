import React from "react";

const Content = () => {
  const name = "Deepa";

  function handleNameChange() {
    const names = ["Earn", "Grow", "Give"];
    const num = Math.floor(Math.random() * 3);
    console.log(`${names[num]} is returned`);
    return names[num];
  }

  const handleClick = () => {
    console.log("Button is clicked");
  }
  const handleClick2 = (name) => {
    console.log(`The technology used is ${name}`);
  }
  const handleClick3 = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.innerText);
  }
  return (
    <main className='App-main'>
      <p>Hi {name}</p>{" "}
      {/*Here the curly braces are used to treat the var name as js var */}
      {/*React cannot take objects,boolean values as child*/}
      <p>Let's {handleNameChange()} Money</p>
      {/* The above function will be called when the page is loading */}
      <button onClick={handleClick}> Click Me</button>
      {/* <button onClick={handleClick()}> Click Me</button> = handleClick() -> if called like this when page is rendering itself the click event will be generated.This is wrong don't call like this.*/}
      <p><button onClick={() => handleClick2('React')}> Which Technology?</button></p>
      {/* arrow function is used to call the function with parameter,so that the action takes place only when the button is clicked unlike page rendering itself*/}
      <p><button onDoubleClick={(event) => handleClick3(event)}> Passing event in a function</button></p>
      {/* arrow function is used to pass the event itself as an object to perform some operations with its event.*/}
    </main>
  );
};

export default Content;
