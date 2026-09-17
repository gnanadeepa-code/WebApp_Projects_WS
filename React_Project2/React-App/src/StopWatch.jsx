import { useRef, useState } from "react";

export const StopWatch = () => {
  const [time, setTime] = useState(0);

  //A ref is a way to store mutable value that persists across renders and does not cause a re-render when it changes. React gives refs thru a hook called useRef
  const intervalRef = useRef(null); //null is the initial value

   //Refs are used to store values that don't affect the UI but need to persist across renders.
   //state is for rendering, refs are for remembering
   //we can create a ref using the useRef hook. It accepts an initial value and returns an object with a single property called current which holds the value of the ref. We can use refs to store values like interval Ids, timeout ids, previous values etc.
  const start = () => {
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current); //current is the property which holds the value
  };
 
  return (
    <div>
      <h2>StopWatch Time: {time}</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};
