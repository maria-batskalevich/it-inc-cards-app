import React, {useEffect} from 'react';
import './App.scss';
import {HashRouter} from 'react-router-dom';
import {Header} from "../02-Features/01-Header/Header";
import {AppRoutes} from "../06-Routes/AppRoutes";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "../05-Store/reducers/app-reducer";
import {RootState} from "../05-Store/store";

export const App: React.FC = () => {
    const dispatch = useDispatch()
    const status = useSelector<RootState, string>(state=> state.app.appState.status)
    useEffect(() => {

        // @ts-ignore
        dispatch(initializeApp())
    }, [])

    return (
        <HashRouter>
            <div className="App">
                <Header/>
                <AppRoutes/>
            </div>
        </HashRouter>
    )

};
