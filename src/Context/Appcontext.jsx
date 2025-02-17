import { useContext, createContext, useState, useReducer } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = AppContext.Provider

export const useAppContext = () => useContext(AppContext)


// export { AppContext, AppContextProvider, useAppContext }
export const AppProvider = ({ children }) => {

    // {
    // // using state

    // // const [state, setState] = useState({
    // //     userName: "",
    // //     email: "",
    // //     formHeading: "Login",
    // //     password: "",
    // //     headingFlag: true,
    // //     form: {
    // //         input: ""
    // //     }

    // // })


    // // const updateFiled = (obj, type = "all") => {

    // //     switch (type) {
    // //         case "all":
    // //             setState(prev =>
    // //             ({
    // //                 ...prev,
    // //                 ...obj
    // //             }));
    // //         case "form": {
    // //             setState(prev =>
    // //             ({
    // //                 ...prev,
    // //                 form: {
    // //                     ...prev.form,
    // //                     ...obj
    // //                 }

    // //             }));
    // //         }
    // //     }





    // // }
    // // console.log("state:", state);

    // }

    // using reducers


    const initalstate = {
        userName: "",
        email: "",
        formHeading: "Login",
        password: "",
        headingFlag: true,
        form: {
            input: "",
            password: "",

        }
    }


    const [state, dispatch] = useReducer(updatefiledReducer, initalstate)

    function updatefiledReducer(state, action) {
        switch (action.type) {
            case "all":
                return {
                    ...state,
                    ...action.payload
                };
            case "form": return {
                ...state,
                form: {
                    ...state.form,
                    ...action.payload

                }
            };
            default:
                return state


        }
    }
    console.log("state:", state);



    return (
        <AppContextProvider value={{ state, dispatch, updatefiledReducer }}>
            {children}
        </ AppContextProvider >
    );

}


