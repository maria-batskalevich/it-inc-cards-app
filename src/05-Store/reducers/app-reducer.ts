import {setIsLoggedIn} from "./auth-reducer";
import {Dispatch} from "react";
import {authAPI} from "../../01-API/auth-api";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    isInitialized: false,
    appState: {
        status: 'idle',
        error: null as string | null,
        info: null as string | null
    } as AppState
}

export type AppState = {
    status: RequestStatusType,
    error: null | string
    info?: string
}

export type InitialStateType = typeof initialState

type ActionsType =
    | ReturnType<typeof setIsInitialized>
    | ReturnType<typeof setAppStatus>
    | ReturnType<typeof setIsLoggedIn>


export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-APP-STATUS":
            return {
                ...state, appState: action.payload.state
            }
        case "SET-IS-INITIALIZED":
            return {
                ...state, isInitialized: true
            }
        default:
            return state
    }
}

export const setAppStatus = (state: AppState) => ({
    type: 'SET-APP-STATUS', payload: {state}
} as const)

export const setIsInitialized = () => (
    {type: "SET-IS-INITIALIZED"} as const)

export const initializeApp = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatus({status: 'loading', error: null}))
    authAPI.me()
        .then(() => {
            dispatch(setIsLoggedIn(true))
            dispatch(setAppStatus({status: 'succeeded', error: null}))
        }).catch((e: any) => {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus({status: 'failed', error: error}))
    })
}