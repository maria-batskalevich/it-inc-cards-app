import {checkAuth} from "./auth-reducer";
import { RootState} from "../store";

import {ThunkDispatch} from "redux-thunk";

export type RequestStatusType = 'idle' | 'loading' | 'succeed' | 'failed'

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

export const initializeApp = () => async (dispatch: ThunkDispatch<RootState, unknown, ActionsType>) => {
    try {
        await dispatch(checkAuth())
        dispatch(setIsInitialized)
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus({status: 'failed', error: error}))
    }
}