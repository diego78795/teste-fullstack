import React,  { useContext } from "react";
import Context from "./FunctionsApiContext"
import { loginApi, registerApi, getUserApi, editUserApi, modifyPasswordApi, deleteUserApi } from "../../service/api"
import StoreContext from "./Context"


const FunctionsApiProvider= ({ children }) => {
    const {setUser} = useContext(StoreContext)
   
    const login = async(user)=>{
       let res = await loginApi(user)
       setUser(res.data.user)
    }

    const register = async(user)=>{
        let res = await registerApi(user)
        setUser(res.data.user)
    }

    const getUser = async(id)=>{
        let res = await getUserApi(id)
        return res.data
    }

    const editUser = async(user,id)=>{
        let res = await editUserApi(user,id)
        if(res){
            res = await getUser(id)
        }
        setUser(res.user)
    }

    const modifyPassword = async(passwords,id)=>{
        await modifyPasswordApi(passwords,id)
    }

    const deleteUser = async(id)=>{
        await deleteUserApi(id)
        setUser("")
    }
   
       return(
           <Context.Provider value={{
               login,
               register,
               getUser,
               editUser,
               modifyPassword,
               deleteUser}}>
               {children}
           </Context.Provider>
       )
   }
   
   export default FunctionsApiProvider;