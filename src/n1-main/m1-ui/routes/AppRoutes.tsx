import {Route, Routes} from 'react-router-dom';
import {Login} from "../../../n2-features/f1-auth/a1-login/Login";
import {Registration} from "../../../n2-features/f1-auth/a2-register/Registration";
import {Profile} from "../../../n2-features/f1-auth/a3-profile/Profile";
import {RecoveryPassword} from "../../../n2-features/f1-auth/a4-recoveryPassword/RecoveryPassword";
import {NotFound} from "../../../n2-features/f1-auth/a5-404/404";
import {NewPassword} from "../../../n2-features/f1-auth/a6-newPassword/NewPassword";
import {Demonstration} from "../../../n2-features/f1-auth/a6-demonstration/Demonstration";

export const NOT_FOUND_ROUTE = '*';
export const LOGIN_ROUTE = 'login';
export const REG_ROUTE = 'register';
export const PROFILE_ROUTE = 'profile';
export const RECOVERY_PASS_ROUTE = 'recoveryPass';
export const NEW_PASS_ROUTE = 'newPass';
export const PACKS_ROUTE = 'cardPacks';
export const CARDS_ROUTE = 'cards';
export const DEMONSTRATION_ROUTE = 'demonstration'

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
    // {
    //     path: PACKS_ROUTE,
    //     component: <PacksListContainer/>,
    // },
    // {
    //     path: CARDS_ROUTE,
    //     component: <Cards/>,
    // },
    {
        path: DEMONSTRATION_ROUTE,
        component: <Demonstration/>
    }
];

export const AppRoutes = () => (
    <Routes>
        {publicRoutes.map(({path, component}) => (
            <Route key={path} path={path} element={component}/>
        ))}
    </Routes>
);