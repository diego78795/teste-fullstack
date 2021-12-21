import React, { useState, useContext } from 'react'
import Button from '../../../../common/Button/Button'

import FunctionsApiContext from "../../../../context/Store/FunctionsApiContext"
import StoreContext from "../../../../context/Store/Context"

import style from "./ModalModifyPassword.module.css"

function ModalModifyPassword({ exitFunction }) {

    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const passwords = {
        "password": password,
        "newPassword": newPassword
    }

    const { modifyPassword } = useContext(FunctionsApiContext)
    const { user } = useContext(StoreContext)

    const id = user._id

    function handleEdit( passwords, e ){
        e.preventDefault()
        modifyPassword(passwords, id)
        exitFunction()
    }

    return (
        <div>
            <form className={style.modal + " forms"}>
            <section>
                <label htmlFor="password">Senha Atual</label>
                <input onChange={(e) => setPassword(e.target.value)}  value={password} type="password" id="password" className={"input"}/>
            </section>
            <section>
                <label htmlFor="newPassword">Nova Senha</label>
                <input onChange={(e) => setNewPassword(e.target.value)}  value={newPassword} type="password" id="newPassword" className={"input"}/>
            </section>
            <Button text={"Editar as senhas"} OnClick={(e) => handleEdit( passwords, e)} />
            <Button text={"Cancelar edição"} OnClick={exitFunction} />
        </form>
        </div>
    )
}

export default ModalModifyPassword
