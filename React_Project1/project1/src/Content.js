import React from "react";

const Content = () => {
  const name = "Deepa";

  function handleNameChange() {
    const names = ["Earn", "Grow", "Give"];
    const num = Math.floor(Math.random() * 3);
    return names[num];
  }
  return (
    <main className='App-main'>
      <p>Hi {name}</p>{" "}
      {/*Here the curly braces are used to treat the var name as js var */}
      {/*React cannot take objects,boolean values as child*/}
      <p>Let's {handleNameChange()} Money</p>
    </main>
  );
};

export default Content;
