import React from "react";
import {SignForm} from "./SignForm/SignForm";
// @ts-ignore
import style from '../02-Login/login.module.scss'

export const Registration = () => {
    return (
        <div className={style.container}>
            <h1>Registration</h1>
            <SignForm/>
        </div>
    )
}