import {useState} from "react"

export const Counter =() => {
    //State is a components memory. It is spl data that, 1. Triggers a re-render when it changes (solving screen update problem) 2.Persists btwn renders (solving component's local variable reset problem when re-rendering)
    //Hooks are spl functions that let you hook into React features
    //useState hook is used for managing state
        
    //currentValue,setterFunction = useState(initialValue) . initialValue can be passed as a function also.
   // const [count,setCount] = useState(0); //returns array with 2 items

   const [count,setCount] = useState(() => {
    console.log("Initial state funciton called");
    return 0;
   }); //This fucntion is called only during the initial render and not during each re-render.This is called as Lazy initialization, where it is useful for expensive initial computation like reading values form storage, fetching data from api

    console.log("Counter component rendered with count:",count);
    const handleClick =() =>{
        setCount(count+1);
    };

    return (
        <button onClick={handleClick}>Count: {count} </button>
    )
}