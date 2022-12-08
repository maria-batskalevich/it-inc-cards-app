import React from "react";
// @ts-ignore
import style from "../02-Login/login.module.scss";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootStateType} from "../../00-App/store";
import {Navigate} from "react-router-dom";


export const Profile = () => {
    const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector
    const profileData = useTypedSelector(state => state.auth.avatar)
    const userName = useSelector<RootStateType, string>(state => state.auth.name)

    if (!userName) return <Navigate to={'/login'}/>

    return (
        <div className={style.container}>
            <h3>Personal Information</h3>
            {
                profileData && <img src={profileData} alt="" width={'200px'} height={'200px'}/>
            }
        </div>
    )
}