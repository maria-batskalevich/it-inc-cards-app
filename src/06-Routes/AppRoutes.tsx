import {Route, Routes} from 'react-router-dom';
import {Login} from "../02-Features/02-Login/Login";
import {Registration} from "../02-Features/03-Registration/Registration";
import {Profile} from "../02-Features/05-Profile/Profile";
import {RecoveryPassword} from "../02-Features/04-PasswordRecovery/RecoveryPassword";
import {NotFound} from "../08-Utils/404";
import {NewPassword} from "../02-Features/04-PasswordRecovery/NewPassword";
import {Logout} from "../02-Features/02-Login/logout";

export const NOT_FOUND_ROUTE = '*';
export const LOGIN_ROUTE = 'login';
export const REG_ROUTE = 'register';
export const PROFILE_ROUTE = 'profile';
export const RECOVERY_PASS_ROUTE = 'recoveryPass';
export const NEW_PASS_ROUTE = 'newPass';
export const PACKS_ROUTE = 'cardPacks';
export const CARDS_ROUTE = 'cards';
export const LOGOUT_ROUTE = 'logout'

export const publicRoutes = [
    {
        path: NOT_FOUND_ROUTE,
        component: <NotFound/>,
    },
    {
        path: LOGIN_ROUTE,
        component: <Login/>,
    },
    {
        path: REG_ROUTE,
        component: <Registration/>,
    },
    {
        path: PROFILE_ROUTE,
        component: <Profile/>,
    },
    {
        path: RECOVERY_PASS_ROUTE,
        component: <RecoveryPassword/>,
    },
    {
        path: NEW_PASS_ROUTE,
        component: <NewPassword/>,
    },
    {
        path: LOGOUT_ROUTE,
        component: <Logout/>
    },
    // {
    //     path: PACKS_ROUTE,
    //     component: <PacksListContainer/>,
    // },
    // {
    //     path: CARDS_ROUTE,
    //     component: <Cards/>,
    // },
];

export const AppRoutes = () => (
    <Routes>
        {publicRoutes.map(({path, component}) => (
            <Route key={path} path={path} element={component}/>
        ))}
    </Routes>
);