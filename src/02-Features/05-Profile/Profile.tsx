import React, {useEffect} from "react";
import style from "../02-Login/login.module.scss";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "../../05-Store/store";
import {Navigate} from "react-router-dom";
import {initializeApp} from "../../05-Store/reducers/app-reducer";

export const Profile = () => {
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
    const dispatch = useDispatch()
    const profileData = useTypedSelector(state => state.auth.user.avatar)
    const isLoggedIn = useSelector<RootState, boolean>(state => state.auth.isLoggedIn)

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