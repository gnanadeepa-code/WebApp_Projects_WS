import { UserInfo } from "./UserInfo"
import { ActionButton } from "./ActionButton"

//In this function we are using spread property ... to include all the props from UserInfo without listing them individually
export const UserCard = (props) => {

    const handleSaveDetails = () => {
        alert("User Details saved");
    }
    return(
        <div>
            <h2>User Details</h2>
            <UserInfo {...props} />
             <ActionButton text="Save Details" onClick={handleSaveDetails}/> {/* here the event handling is passed as props */}
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