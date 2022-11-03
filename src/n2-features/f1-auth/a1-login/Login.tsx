import React, {FormEvent, useEffect, useState} from "react";
import style from './login.module.scss'
import SuperInputText from "../../../n1-main/m1-ui/common/c1-SuperInput/SuperInputText";
import SuperCheckbox from "../../../n1-main/m1-ui/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../../n1-main/m2-bll/store";
import {loginTC} from "./auth-reducer";
import {Navigate} from "react-router-dom";
import {initializeApp} from "../../../n1-main/m1-ui/app-reducer";


type LoginPropsType = {}

export const Login: React.FC<LoginPropsType> = React.memo(() => {

    const isLoggedIn = useSelector<RootState>(state => state.auth.isLoggedIn)
    const isInitialized = useSelector<RootState>(state => state.app.isInitialized)
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        email: '' as string,
        password: '' as string,
        rememberMe: true,
    })
    useEffect(() => {

        // @ts-ignore
        dispatch(initializeApp())
    }, [dispatch])

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        // @ts-ignore
        dispatch(loginTC({...values}))
    }

    if (isLoggedIn) return <Navigate to={'/profile'}/>

    return (
        <div className={style.container}>
            <h3>Sign in</h3>
            <form onSubmit={onSubmit}>
                <SuperInputText
                    id={'login-email'}
                    type="text"
                    placeholder={'Email'}
                    value={values.email}
                    onChange={e => setValues({...values, email: e.currentTarget.value})}
                />
                <SuperInputText
                    id={'password-email'}
                    type="text"
                    placeholder={'Password'}
                    value={values.password}
                    onChange={e => setValues({...values, password: e.currentTarget.value})}
                />

                <div className={style.rememberMe}>
                    <SuperCheckbox
                        checked={values.rememberMe}
                        onChange={e => setValues({...values, rememberMe: e.currentTarget.checked})}
                    />
                    <span>Remember me</span>
                </div>
                <div className={style.forgotPass}>
                    <a href="">Forgot password?</a>
                </div>
                <SuperButton type={'submit'}>Sign in</SuperButton>
            </form>

            <p>Already have an account?</p>
            <a href="" className={style.signUp}>Sign Up</a>
        </div>
    )
})
