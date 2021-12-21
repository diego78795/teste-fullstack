import React from 'react'
import RegisterForms from './RegisterForms/RegisterForms'

import style from "./RegisterPage.module.css"

function RegisterPage() {
    return (
        <section className={style.sectionPage}>
            <h1>Faça o seu cadastro</h1>
            <RegisterForms/>
        </section>
    )
}

export default RegisterPage
