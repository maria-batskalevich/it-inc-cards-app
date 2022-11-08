import React from "react";
import style from './login.module.scss'
import {useSelector} from "react-redux";
import {RootState} from "../../05-Store/store";
import {Navigate} from "react-router-dom";
import {SignForm} from "./SignForm";


export const Login: React.FC = React.memo(() => {
      const isLoggedIn = useSelector<RootState>(state => state.auth.isLoggedIn)

    // useEffect(() => {
    //     // @ts-ignore
    //     dispatch(initializeApp())
    // }, [dispatch])

    if (isLoggedIn) return <Navigate to={'/profile'}/>

    return (
        <div className={style.container}>
            <h3>Sign in</h3>
            <span>{'Email: nya-admin@nya.nya Password: 1qazxcvBG'}</span>
            <SignForm/>
            <p>Already have an account?</p>
            <a href="" className={style.signUp}>Sign Up</a>
        </div>
    )
})
