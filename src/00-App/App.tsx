import React from 'react';
import './App.scss';
import {HashRouter} from 'react-router-dom';
import {Header} from "../02-Features/01-Header/Header";
import {AppRoutes} from "../06-Routes/AppRoutes";

export const App = (): React.ReactElement => (

    <HashRouter>
        <div className="App">
            <Header/>
            <AppRoutes/>
        </div>
    </HashRouter>
);
