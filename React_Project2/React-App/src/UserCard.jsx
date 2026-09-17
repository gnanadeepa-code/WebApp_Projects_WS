import { UserInfo } from "./UserInfo"
import { ActionButton } from "./ActionButton"
import { useContext } from "react"
import { UserContext } from "./UserContext"

//In this function we are using spread property ... to include all the props from UserInfo without listing them individually
export const UserCard = (props) => {

    //To use the context import useContext hook and the UserContext component.We don't need props to send values from parent to the nested child where it gets messy. 
   // const user = useContext(UserContext);
    const {user, setUser} = useContext(UserContext);

    const toggleTheme = () => {
        setUser({
            ...user,
            theme:user.theme === "dark" ? "light" : "dark",
        });
    };

    const handleSaveDetails = () => {
        alert("User Details saved");
    }
    return(
        <div>
            <h2>User Details</h2>
            <UserInfo {...props} />
             <ActionButton text="Save Details" onClick={handleSaveDetails}/> {/* here the event handling is passed as props */}
             <h3>Using Context</h3>
             <p>Name: {user.name}</p>
             <p>ROle: {user.role}</p>
             <p>Theme: {user.theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

//In this function we are using rest property ... to collect rest of the props from UserInfo without listing them individually except id prop
export const UserCard1 = ({id, ...rest}) => {
    return(
        <div>
            <h2>User Details</h2>
            <p>User Id: {id}</p>
            <UserInfo {...rest} />
        </div>
    )
}