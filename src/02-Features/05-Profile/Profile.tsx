import React from "react";
import style from "../02-Login/login.module.scss";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../../05-Store/store";
import {Navigate} from "react-router-dom";

export const Profile = () => {
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
    const profileData = useTypedSelector(state => state.auth.user.avatar)
    const isLoggedIn = useSelector<RootState>(state => state.auth.isLoggedIn)

    if(!isLoggedIn) return <Navigate to={'/login'}/>

    return (
        <div className={style.container}>
            <h3>Personal Information</h3>
            {
                profileData &&   <img src={profileData} alt="" width={'200px'} height={'200px'}/>
            }
        </div>
    )
}