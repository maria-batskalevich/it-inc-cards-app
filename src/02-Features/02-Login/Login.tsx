import React from "react";
// @ts-ignore
import style from './login.module.scss'
import {useSelector} from "react-redux";
import {RootStateType} from "../../00-App/store";
import {Navigate} from "react-router-dom";
import {SignInForm} from "./SignInForm/SignInForm";


export const Login: React.FC = React.memo(() => {
    const userName = useSelector<RootStateType, string>(state => state.auth.name)

    if (userName) return <Navigate to={'/profile'}/>

    return (
        <div className={style.container}>
            <h3>Sign in</h3>
            <span>{'Email: nya-admin@nya.nya Password: 1qazxcvBG'}</span>
            <SignInForm/>
            <p>Already have an account?</p>
            {/*<a className={style.signUp}>Sign Up</a>*/}
        </div>
    )
})
