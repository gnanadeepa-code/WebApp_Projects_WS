import { UserInfo } from "./UserInfo"

//In this function we are using spread property ... to include all the props from UserInfo without listing them individually
export const UserCard = (props) => {
    return(
        <div>
            <h2>User Details</h2>
            <UserInfo {...props} />
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