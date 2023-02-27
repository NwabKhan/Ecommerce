// create a context
// ThemeProvider
// Consumer => useContext Hook

import { createContext, useContext } from "react";

export const AppContext = createContext(); // create a context

export const AppProvider = ({children})=>{
    return(
        <AppContext.Provider value={{name: "Muhammad Junaid"}}>
            {children}
        </AppContext.Provider>
    )
}

 //we can also make custom hooks for simplicity
 export const useMyCustomHook = ()=>{
    return useContext(AppContext)
 }

// export {AppContext,AppProvider, useMyCustomHook};
