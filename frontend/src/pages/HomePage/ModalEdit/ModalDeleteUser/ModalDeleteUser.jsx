import React, { useContext } from 'react'
import Button from '../../../../common/Button/Button'

import FunctionsApiContext from "../../../../context/Store/FunctionsApiContext"
import StoreContext from "../../../../context/Store/Context"

import style from "./ModalDeleteUser.module.css"

function ModalDeleteUser({ exitFunction }) {

    const { deleteUser } = useContext(FunctionsApiContext)
    const { user } = useContext(StoreContext)

    const id = user._id

    function handleDelete( e ){
        e.preventDefault()
        deleteUser(id)
    }

    return (
        <div className={style.divModal+ " forms"}>
            <p>Tem certeza que deseja deletar a sua conta?</p>
            <Button text={"Sim delete a conta"} OnClick={(e) => handleDelete(e)}/>
            <Button text={"Não"} OnClick={exitFunction} />
        </div>
    )
}

export default ModalDeleteUser