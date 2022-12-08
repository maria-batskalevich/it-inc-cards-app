import React, {useEffect} from 'react';
import './App.scss';
import {HashRouter} from 'react-router-dom';
import {Header} from "../02-Features/01-Header/Header";
import {AppRoutes} from "../06-Routes/AppRoutes";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./store";
import {Loader} from "../04-Components/common/c4-Loadrer-Spinner/Loader";
import {authMeTC} from "../02-Features/auth-reducer";


export const App: React.FC = () => {
    const dispatch = useDispatch()
    // const status = useSelector<RootStateType, string>(state=> state.app.status)
    const isInitialized = useSelector<RootStateType, boolean>(state=> state.app.isInitialized)
    useEffect(() => {
        // @ts-ignore
        dispatch(authMeTC())
    }, [dispatch])

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <Loader/>
        </div>
    }

    return (
        <HashRouter>
            <div className="App">
                <Header/>
                <AppRoutes/>
            </div>
        </HashRouter>
    )

};
