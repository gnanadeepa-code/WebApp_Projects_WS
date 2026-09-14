import { useState } from "react";

export const Counter = () => {
  //State is a components memory. It is spl data that, 1. Triggers a re-render when it changes (solving screen update problem) 2.Persists btwn renders (solving component's local variable reset problem when re-rendering)
  //Hooks are spl functions that let you hook into React features
  //useState hook is used for managing state

  //currentValue,setterFunction = useState(initialValue) . initialValue can be passed as a function also.
  // const [count,setCount] = useState(0); //returns array with 2 items

  const [count, setCount] = useState(() => {
    console.log("Initial state funciton called");
    return 0;
  }); //This fucntion is called only during the initial render and not during each re-render.This is called as Lazy initialization, where it is useful for expensive initial computation like reading values form storage, fetching data from api

  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(false);


  console.log("Counter component rendered with count:", count);



  //In below code the count in after setcount also remains 0 since the State is a snapshot , its value remain 0 even after the setcount function execution. But if based on previous state's value if next action needs to be performed, then we pass a function to the setter instead of a value.
  const handleClick = () => {
    console.log("Before setCount:", count);
    setCount(count + 1); //React takes the value we pass in and queues it to set count to 1
    console.log("After setCount:", count);
    setCount((prev) => {
        console.log("Updated setcount:",prev);
        return prev +5}); //React also queues function but after event handler finishes, it updates the current value with prev updated value unlike passing value as above
    console.log("After setCount prevstate:", count);
    setCount((prev) => {
        console.log("Updated setcount:",prev);
        return prev +10});

    setName("Updated");
    setIsActive(true);
    //Even though we have 5 states above React waits until event handler finishes, gathers all state updates and applies them in one render instead of 5 separate renders to load the state. THis is called Batching used for smart optimization.

  };

  return (
    <div>
        <p>Count: {count}</p>
        <p>Name: {name}</p>
        <p>Active:{isActive ? "Yes" : "No"}</p>
        <button onClick={handleClick}>Update all 3</button>;
    </div>
  );
};
