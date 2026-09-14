import {useState} from "react";

export const LoginCard = () => {
    //Golden rules of hooks-- 1. Only call hooks at the top level of component function, not inside loops,conditions,nested functions, try/catch blocks, event handlers, regular js functions 2. Only call hooks from React functions ie. from React components, custom hooks 3. THe order of hooks matters since React uses internal mapping for the below 2 useState hooks in slots (doesn't uses its name), if anyone is mentioned inside the conditional if stmt, then only 1 useState will be available where react confuses about the 2nd missing one 4. Hooks shd be placed at the starting of the function don't use it after the early return stmt.

    //In React, state updates are not immediate, first trigger phase where snapshot of state is maintained, once the function is fully completed then only it enters into render phase,variables value never changes within render, finally commit phase is to update the ui component
    
    //using boolean value datatype for useState
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //using string value datatype for useState
    const [msg,setMsg] = useState("");

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    const handleChange = (event) => {
        setMsg(event.target.value);
    };

    return(
        <>
        <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
        <input type="text" placeholder="Type a message" value={msg} onChange={handleChange} />
        <p>{msg}</p>
        </>
    );
};