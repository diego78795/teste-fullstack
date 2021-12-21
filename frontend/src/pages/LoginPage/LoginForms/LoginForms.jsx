import React, { useState, useContext } from 'react'
import Button from '../../../common/Button/Button'

import FunctionsApiContext from "../../../context/Store/FunctionsApiContext"

function LoginForms() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const user = {
        "email": email,
        "password": password
    }

    const { login } = useContext(FunctionsApiContext)

    function handleLogin( user, e ){
        e.preventDefault()
        login(user)
    }

    return (
        <form className={"forms"}>
            <section>
                <label htmlFor="email">E-mail</label>
                <input onChange={(e) => setEmail(e.target.value)}  value={email} type="text" id="email" className={"input"}/>
            </section>
            <section>    
                <label htmlFor="senha">Senha</label>
                <input onChange={(e) => setPassword(e.target.value)}  value={password} type="password" id="senha" className={"input"}/>
            </section>
            <Button text={"Entrar"} OnClick={(e) => handleLogin( user, e)} />
        </form>
    )
}

export default LoginForms
