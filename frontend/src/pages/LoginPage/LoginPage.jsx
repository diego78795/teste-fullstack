import React from 'react'
import LoginForms from './LoginForms/LoginForms'

import style from "./LoginPage.module.css"

function LoginPage() {
    return (
        <section className={style.sectionPage}>
            <h1>Faça o seu login</h1>
            <LoginForms/>
        </section>
    )
}

export default LoginPage
