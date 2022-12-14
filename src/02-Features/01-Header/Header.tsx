import React from 'react';
import {NavLink} from "react-router-dom";
import {publicRoutes} from "../../06-Routes/AppRoutes";

export const Header = () => {
    return (
        <div style={{marginBottom: '20px'}}>
            {publicRoutes.map(({path}) =>
                <NavLink to={path} key={path}>
                    <span style={{padding: '5px'}}>{path}</span>
                </NavLink>
            )}

        </div>
    );
};