import React, { useState, useContext } from 'react'
import Button from '../../../common/Button/Button'

import FunctionsApiContext from "../../../context/Store/FunctionsApiContext"

function RegisterForms() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const user = {
        "name": name,
        "email": email,
        "password": password
    }

    const { register } = useContext(FunctionsApiContext)

    function handleRegister( user, e ){
        e.preventDefault()
        register(user)
    }

    return (
        <form className={"forms"}>
            <section>
                <label htmlFor="name">Nome</label>
                <input onChange={(e) => setName(e.target.value)}  value={name} type="text" id="name" className={"input"}/>
            </section>
            <section>
                <label htmlFor="email">E-mail</label>
                <input onChange={(e) => setEmail(e.target.value)}  value={email} type="text" id="email" className={"input"}/>
            </section>
            <section>    
                <label htmlFor="senha">Senha</label>
                <input onChange={(e) => setPassword(e.target.value)}  value={password} type="password" id="senha" className={"input"}/>
            </section>
            <Button text={"Cadastrar"} OnClick={(e) => handleRegister( user, e)} />
        </form>
    )
}

export default RegisterForms