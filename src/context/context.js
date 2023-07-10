import { useState, createContext, useContext, Children } from "react";
import ReactDOM from "react-dom/client";
// import { Children } from "react";

export const UserContexts = createContext();

export default function Form(props) {
    const [alldata, setAlldata] = useState([])


    return (
        <UserContexts.Provider value={{ alldata, setAlldata }}>
            {props.children}
        </UserContexts.Provider>
    );
}

export const UserContext = () => {
    try {
        return useContext(UserContexts)
    } catch (error) {

    }
}
