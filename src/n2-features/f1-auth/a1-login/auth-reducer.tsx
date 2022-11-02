import React from "react";
import {API} from "../../../n1-main/m3-dal/API";
import {LoginDataType, UserInfoResponseType} from "../../../n1-main/m3-dal/ApiResponseTypes";
import {AppDispatch} from "../../../n1-main/m2-bll/store";
import {setIsLoading, setAppInfo, setIsInitialized, setAppError} from "../../../n1-main/m1-ui/app-reducer";
import {errorsHandler} from "../../../utils/errors";


type InitialStateType = {
    isLoggedIn: boolean
    info: UserInfoResponseType | null

}

const InitialState: InitialStateType = {
    isLoggedIn: false,
    info: null,
}
type authReducerActionType =
    | ReturnType<typeof setIsLoggedIn >
    | ReturnType<typeof setUsersInfo>
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setIsInitialized>
    | ReturnType<typeof setAppInfo>
    | ReturnType<typeof setAppError>


export const authReducer = (
    state = InitialState,
    action: authReducerActionType): InitialStateType => {
    switch (action.type) {
        case "SET-IS-LOGGED-IN":
            return {
                ...state, isLoggedIn: action.payload.isLoggedIn
            }
        case "SET-USERS-INFO":
            return {
                ...state, info: action.payload
            }

        default:
            return state;
    }
}

const setIsLoggedIn = (isLoggedIn: boolean) => (
    {type: 'SET-IS-LOGGED-IN', payload: {isLoggedIn}} as const)
const setUsersInfo = (info: UserInfoResponseType | null) => (
    {type: 'SET-USERS-INFO', payload: info} as const)


export const loginTC = (loginData: LoginDataType) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setIsLoading(true))
        const response = await API.login(loginData)
        dispatch(setUsersInfo(response.data))
        dispatch(setIsLoggedIn(true))
        dispatch(setAppInfo(`Successful login, ${response.data.email}`))
    }
    catch (e) {
        errorsHandler(e, dispatch)
    }
    finally {
        dispatch(setIsLoading(false))
    }
}
