import React, {Dispatch} from "react";
import {LoginDataType, UserDataType} from "../../01-API/ApiResponseTypes";
import {setAppStatus} from "./app-reducer";
import {authAPI} from "../../01-API/auth-api";
import {AppDispatch} from "../store";


const InitialState = {
    isLoggedIn: false,
    user: {
        avatar: '',
        created: 5,
        email: '',
        isAdmin: false,
        name: '',
        publicCardPacksCount: 0,
        rememberMe: false,
        token: '',
        updated: 5,
        _id: '',
    }
}

type AuthInitialStateType = typeof InitialState

type ActionsType =
    | ReturnType<typeof setIsLoggedIn>
    | ReturnType<typeof setUsersData>
    | ReturnType<typeof setAppStatus>

export const authReducer = (
    state: AuthInitialStateType = InitialState,
    action: ActionsType): AuthInitialStateType => {
    switch (action.type) {
        case "SET-IS-LOGGED-IN":
            return {
                ...state, isLoggedIn: action.payload.isLoggedIn
            }
        case "SET-USERS-DATA":
            return {
                ...state, user: action.payload
            } as AuthInitialStateType

        default:
            return state;
    }
}

export const setIsLoggedIn = (isLoggedIn: boolean) => (
    {type: 'SET-IS-LOGGED-IN', payload: {isLoggedIn}} as const)
const setUsersData = (userData: UserDataType | null) => (
    {type: 'SET-USERS-DATA', payload: userData} as const)


export const loginTC = (loginData: LoginDataType) => async (dispatch: AppDispatch) => {
    dispatch(setAppStatus({status: 'loading', error: null}))
    try {
        const response = await authAPI.login(loginData)
        dispatch(setUsersData(response.data))
        dispatch(setIsLoggedIn(true))
        dispatch(setAppStatus({status: 'succeeded', error: null}))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus({status: 'failed', error: error}))
    }
}

// export const checkAuth = () => async (dispatch: Dispatch<any>) => {
//     dispatch(setAppStatus({status: 'loading', error: null}))
//     try {
//         const res = await authAPI.me()
//         dispatch(setUsersData(res.data))
//         dispatch(setIsLoggedIn(true))
//         dispatch(setAppStatus({status: 'succeeded', error: null}))
//     } catch (e: any) {
//         const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
//         dispatch(setAppStatus({status: 'failed', error: error}))
//     }
// }

export const logoutTC = () => async (dispatch: Dispatch<ActionsType>) => {
    try {
        await authAPI.logout()
        dispatch(setIsLoggedIn(false))
        dispatch(setUsersData(null))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus({status: 'failed', error: error}))
    }
}