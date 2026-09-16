import { useReducer } from "react";

const initialState = 0;

//lazy initialization in useReducer accepts an optional argument, an init function. REact calls init once, passing it the second argument, whatever init returns becomes the actual initial state. init function only runs when the component mounts, not on every render. It is ideal for expensive initial computations or reading from external sources like localStorage

const reducer = (state, action) => {
  switch (action) {
    //switch stmt is the easiest to handle multiple actions
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const init = (initialValue) => {
  console.log("init function called - this only runs once!");
  const savedCount = localStorage.getItem("count");

  //for getting values from localstorage we need another hook, for now to make it simple we can add the below cmd in console log so that value 43 will be picked up from it. Type, localStorage.setItem("count",43) and then refresh the browser to see that count:43 on screen
  if(savedCount !== null){
    console.log("Found saved count:", savedCount);
    return parseInt(savedCount);
  }

  console.log("NO saved count , using initial value:",initialValue);
  return initialValue;
};

export const CounterWithReducer = () => {
  //without lazyloading
  /* const [count,dispatch] = useReducer(reducer, initialState); */
  //with lazyloading
  const [count, dispatch] = useReducer(reducer, initialState, init);
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};
