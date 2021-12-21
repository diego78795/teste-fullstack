import React, { useState } from "react";
import Context from "./Context"

const StoreProvider = ({ children }) => {

    const [user , setUser] = useState("")

    return(
        <Context.Provider value={{
            user, setUser,}}>
            {children}
        </Context.Provider>
    )
}

export default StoreProvider