import { useContext, createContext, useState } from "react";

const AppContext = createContext(null);

const AppContextProvider = AppContext.Provider

const useAppContext = () => useContext(AppContext)


export { AppContext, AppContextProvider, useAppContext }
