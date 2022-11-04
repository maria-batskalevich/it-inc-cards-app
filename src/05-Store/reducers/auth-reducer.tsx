import React from "react";
import {LoginDataType, UserDataType} from "../../01-API/ApiResponseTypes";
import {AppDispatch} from "../store";
import {setIsLoading, setAppInfo, setIsInitialized, setAppError} from "./app-reducer";
import {errorsHandler} from "../../08-Utils/errors";
import {authAPI} from "../../01-API/auth-api";



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

type AuthInitialStateType = {
    isLoggedIn: boolean,
    user: UserDataType | null
}
type authReducerActionType =
    | ReturnType<typeof setIsLoggedIn>
    | ReturnType<typeof setUsersData>
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setIsInitialized>
    | ReturnType<typeof setAppInfo>
    | ReturnType<typeof setAppError>


export const authReducer = (
    state = InitialState,
    action: authReducerActionType): AuthInitialStateType => {
    switch (action.type) {
        case "SET-IS-LOGGED-IN":
            return {
                ...state, isLoggedIn: action.payload.isLoggedIn
            }
        case "SET-USERS-DATA":
            return {
                ...state, user: action.payload.userData
            }

        default:
            return state;
    }
}

export const setIsLoggedIn = (isLoggedIn: boolean) => (
    {type: 'SET-IS-LOGGED-IN', payload: {isLoggedIn}} as const)
const setUsersData = (userData: UserDataType | null) => (
    {type: 'SET-USERS-DATA', payload: {userData}} as const)


export const loginTC = (loginData: LoginDataType) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setIsLoading(true))
        const response = await authAPI.login(loginData)
        dispatch(setUsersData(response.data))
        dispatch(setIsLoggedIn(true))
        dispatch(setAppInfo(`Successful login, ${response.data.email}`))
    } catch (e) {
        errorsHandler(e, dispatch)
    } finally {
        dispatch(setIsLoading(false))
    }
}

export const checkAuth = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(setIsLoading(true))
        const res = await authAPI.auth()
        dispatch(setUsersData(res.data))
        dispatch(setIsLoggedIn(true))
    } catch (e) {
        errorsHandler('', dispatch)
    } finally {
        dispatch(setIsLoading(false))
        dispatch(setIsInitialized(true))
    }
}
export const logoutTC = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(setIsLoading(true))
        const res = await authAPI.logout()
        dispatch(setIsLoggedIn(false))
        dispatch(setUsersData(null))
        dispatch(setAppInfo(res.data.info))
    } catch (e) {
        errorsHandler(e, dispatch)
    } finally {
        dispatch(setIsLoading(false))
    }
}