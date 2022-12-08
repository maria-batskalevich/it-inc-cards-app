import React from "react";
import {useSelector} from "react-redux";
import {RootStateType} from "../00-App/store";
import {Navigate} from "react-router-dom";


export const NotFound = () => {
    const userName = useSelector<RootStateType, string>(state => state.auth.name)
    if (userName) return <Navigate to={'/profile'}/>
    else return <Navigate to={'/login'}/>

    return (
        <div>
            <h1>NotFound</h1>
        </div>
    )
}