import React, { useState, useContext, useEffect } from 'react'
import Button from '../../../common/Button/Button'

import FunctionsApiContext from "../../../context/Store/FunctionsApiContext"
import StoreContext from "../../../context/Store/Context"

import style from "./ModalEdit.module.css"

import ModalDeleteUser from './ModalDeleteUser/ModalDeleteUser'
import ModalModifyPassword from './ModalModifyPassword/ModalModifyPassword'

function ModalEdit({ exitFunction }) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const userEdit = {
        "name": name,
        "email": email
    }

    const { editUser, getUser } = useContext(FunctionsApiContext)
    const { user } = useContext(StoreContext)

    const id = user._id

    function handleEdit( userEdit, e ){
        e.preventDefault()
        editUser(userEdit, id)
        exitFunction()
    }

    async function getDatesUser(){
        let res = await getUser(id)
        setName(res.user.name)
        setEmail(res.user.email)
    }

    useEffect(() => {
        getDatesUser()
    }, [getDatesUser])

    const [activeModalDelete, setActiveModalDelete] = useState(false)
    const [activeModalModifyPass, setActiveModalModifyPass] = useState(false)

    return (
        <div>
            {activeModalDelete ? <ModalDeleteUser exitFunction={()=>setActiveModalDelete(false)} /> : <></> }
            {activeModalModifyPass ? <ModalModifyPassword exitFunction={()=>setActiveModalModifyPass(false)} /> : <></> }
            <form className={"forms"}>
            <section>
                <label htmlFor="name">Nome</label>
                <input onChange={(e) => setName(e.target.value)}  value={name} type="text" id="name" className={"input"}/>
            </section>
            <section>
                <label htmlFor="email">E-mail</label>
                <input onChange={(e) => setEmail(e.target.value)}  value={email} type="text" id="email" className={"input"}/>
            </section>
            <section className={style.sectionModals}>
                <p onClick={()=>setActiveModalModifyPass(true)}>Mudar senha</p>
                <p onClick={()=>setActiveModalDelete(true)}>Deletar conta</p>
            </section>
            <Button text={"Editar"} OnClick={(e) => handleEdit( userEdit, e)} />
            <Button text={"Cancelar a edição"} OnClick={exitFunction} />
        </form>
        </div>
    )
}

export default ModalEdit
