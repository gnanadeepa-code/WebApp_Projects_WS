import { createContext } from "react";
//If there is no provider parent app in the tree below default values will be taken by the app
export const UserContext = createContext({
    name:"Guest",
    role:"visitor",
    theme:"light",
});