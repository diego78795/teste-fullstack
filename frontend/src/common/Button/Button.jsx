import React from 'react'

import style from "./Button.module.css"

function Button({ text, OnClick }) {
    return (
        <button onClick={OnClick} className={style.button}><p>{text}</p></button>
    )
}

export default Button
