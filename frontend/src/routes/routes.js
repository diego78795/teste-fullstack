import React, { useContext } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import StoreContext from "../context/Store/Context"

import LoginPage from "../pages/LoginPage/LoginPage"
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import HomePage from "../pages/HomePage/HomePage"

function CustomRoute({ path, children }) {
    const {user} = useContext(StoreContext)
    if(!user && (path !== "/login" && path !== "/register")) return <Navigate to="/login"/>
    else if(user && (path === "/login" || path === "/register")) return <Navigate to="/"/>
    
    return children
}

function RoutesWebSite() {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" 
                    element={
                        <CustomRoute path="/login">
                            <LoginPage/>
                        </CustomRoute>
                    }/>
                <Route exact path="/register" 
                    element={
                        <CustomRoute path="/register">
                            <RegisterPage/>
                        </CustomRoute>
                    }/>
                <Route exact path="/" 
                    element={
                        <CustomRoute path="/">
                            <HomePage/>
                        </CustomRoute>
                    }/>
            </Routes>
        </Router>
    )
}

export default RoutesWebSite