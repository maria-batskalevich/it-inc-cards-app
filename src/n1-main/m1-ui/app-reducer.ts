import {setIsLoggedIn} from "../../n2-features/f1-auth/a1-login/auth-reducer";
import {AppDispatch} from "../m2-bll/store";
import {authAPI} from "../m3-dal/auth-api";

const initialState = {
    isLoading: false,
    isInitialized: false,
    info: '',
    error: '',
}
export type InitialStateType = {
    isLoading: boolean,
    isInitialized: boolean,
    info: string
    error: string
}

type AppReducerActionType =
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setIsInitialized>
    | ReturnType<typeof setAppInfo>
    | ReturnType<typeof setAppError>


export const appReducer = (state = initialState, action: AppReducerActionType): InitialStateType => {
    switch (action.type) {
        case "SET-IS-LOADING":
            return {
                ...state, isLoading: action.payload.status
            }
        case "SET-IS-INITIALIZED":
            return {
                ...state, isInitialized: action.payload.isInitialized
            }
        case "SET-APP-INFO":
            return {
                ...state, info: action.payload.info
            }
        case "SET-APP-ERROR":
            return {
                ...state, error: action.payload.error
            }
        default:
            return state
    }
}

export const setIsLoading = (status: boolean) => (
    {type: 'SET-IS-LOADING', payload: {status}} as const)

export const setIsInitialized = (isInitialized: boolean) => (
    {type: "SET-IS-INITIALIZED", payload: {isInitialized}} as const)

export const setAppInfo = (info: string) => (
    {type: 'SET-APP-INFO', payload: {info}} as const)

export const setAppError = (error: string) => (
    {type: 'SET-APP-ERROR', payload: {error}} as const)

// export const initializeApp = () => async (dispatch: ThunkDispatch<RootStateType, unknown, AppReducerActionType>) => {
//     try {
//         await dispatch(checkAuth)
//         dispatch(setIsInitialized(true))
//     } catch (e) {
//         const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
//     }
// }

export const initializeApp = () => (dispatch: AppDispatch) => {
    authAPI.auth()
        .then((res) => {
            dispatch(setIsLoggedIn(true))})
        .finally(() => {
        dispatch(setIsInitialized(true))
    })
}