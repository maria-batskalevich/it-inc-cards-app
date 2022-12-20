import React from "react";
// @ts-ignore
import style from '../02-Login/login.module.scss'
import {useSelector} from "react-redux";
import {RootStateType} from "../../00-App/store";
import {Navigate} from "react-router-dom";
import {SignUpForm} from "./SignUpForm/SignUpForm";

export const Registration = () => {
    const userName = useSelector<RootStateType, string>(state => state.auth.name)

    if (userName) return <Navigate to={'/profile'}/>
    return (
        <div className={style.container}>
            <h1>Registration</h1>
            <SignUpForm/>
        </div>
    )
}