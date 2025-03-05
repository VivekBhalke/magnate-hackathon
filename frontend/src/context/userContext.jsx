import { createContext } from "react";
import { useState } from "react";

export const UserDataContext = createContext(null)

export const UserDataProvider = (props) => {
    const [email,setEmail] = useState("");
    return (
        <UserDataContext.Provider value={{email,setEmail}}>
            {props.children}
        </UserDataContext.Provider>
    )
}
