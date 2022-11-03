import React from "react";
import SuperButton from "../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {logoutTC} from "../a1-login/auth-reducer";
import {RootState} from "../../../n1-main/m2-bll/store";
import {Navigate} from "react-router-dom";


export const Logout = () => {
    const isLoggedIn = useSelector<RootState>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()
    const logoutHandler = () => {
        // @ts-ignore
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