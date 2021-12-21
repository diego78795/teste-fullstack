import { createContext } from "react";

const FunctionsApiContext = createContext({
    login: ()=>{},
    register: ()=>{},
    getUser: ()=>{},
    editUser: ()=>{},
    modifyPassword: ()=>{},
    deleteUser: ()=>{}
});
export default FunctionsApiContext;