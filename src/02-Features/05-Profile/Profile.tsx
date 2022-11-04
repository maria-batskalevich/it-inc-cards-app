import React, {useEffect} from "react";
import style from "../02-Login/login.module.scss";
import {useAppSelector} from "../../07-Hooks/hooks";
import {checkAuth} from "../../05-Store/reducers/auth-reducer";
import {useDispatch} from "react-redux";

export const Profile = () => {
    const {profileData} = useAppSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(checkAuth())
    }, [dispatch])
    return (
        <div className={style.container}>
            <h3>Personal Information</h3>
            {
                profileData &&   <img src={profileData} alt="" width={'200px'} height={'200px'}/>
            }
        </div>
    )
}