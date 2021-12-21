import React, { useState } from 'react'
import ModalEdit from './ModalEdit/ModalEdit'

import style from "./HomePage.module.css"

function HomePage() {

    const [activeModalEdit, setActiveModalEdit] = useState(false)
    return (
        <div className={style.page}>
            <nav>
                <ul>
                    <li onClick={()=>setActiveModalEdit(true)}>Editar dados</li>
                </ul>
            </nav>
            {activeModalEdit ? <ModalEdit exitFunction={()=>setActiveModalEdit(false)} /> : <></> }
            <h1>Seja bem vindo a nossa plataforma</h1>
            <p>Esta é uma pagina para testar o meu desenvolvimento fullstack</p>
            <p>Clique no canto superior direito para editar os seus dados</p>
        </div>
    )
}

export default HomePage
