import React from 'react';
import {Header} from './header/Header';
import {AppRoutes} from "./routes/AppRoutes";


export const Main = () => (
    <div>
        <Header/>
        <AppRoutes/>
    </div>
);