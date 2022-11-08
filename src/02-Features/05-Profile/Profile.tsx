import React, {useEffect} from "react";
import style from "../02-Login/login.module.scss";
import {checkAuth} from "../../05-Store/reducers/auth-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "../../05-Store/store";
import {Navigate} from "react-router-dom";

export const Profile = () => {
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
    const profileData = useTypedSelector(state => state.auth.user.avatar)
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<RootState>(state => state.auth.isLoggedIn)

    useEffect(() => {
        // @ts-ignore
        dispatch(checkAuth())
    }, [dispatch])

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