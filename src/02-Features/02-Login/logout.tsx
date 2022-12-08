import React from "react";
import SuperButton from "../../04-Components/common/c2-SuperButton/SuperButton";
import {useSelector} from "react-redux";
import {RootStateType} from "../../00-App/store";
import {Navigate} from "react-router-dom";
import {logoutTC} from "../auth-reducer";
import {useAppDispatch} from "../../07-Hooks/hooks";


export const Logout = () => {
    const isLoggedIn = useSelector<RootStateType>(state => state.auth.name)
    const dispatch = useAppDispatch()
    const logoutHandler = () => {
        dispatch(logoutTC())
    }
    if (!isLoggedIn) return <Navigate to={'/login'}/>

    return (
        <div>
            <h1>Logout</h1>
            <SuperButton onClick={logoutHandler}>LogOUT</SuperButton>
        </div>
    )

}