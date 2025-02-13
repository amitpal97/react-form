import { useState } from "react";
import { AppContextProvider } from "../Context/Appcontext";

const AppProvider = ({ children }) => {


    const [state, setState] = useState({
        userName: "",
        email: "",
        formHeading: "Login",
        password: "",

        headingFlag: true

    })


    const updateFiled = (obj) => {
        setState(prev =>
        ({
            ...prev,
            ...obj
        }));

    }
    console.log("state:", state);



    return (
        <AppContextProvider value={{ state, updateFiled }}>
            {children}
        </ AppContextProvider >
    );

}


export default AppProvider