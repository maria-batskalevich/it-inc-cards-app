import {setIsLoggedIn, setUsersData} from "./auth-reducer";
import {Dispatch} from 'redux'
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
    | ReturnType<typeof setUsersData>


export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-APP-STATUS":
            return {
                ...state, appState: action.payload.state
            }
        case "SET-IS-INITIALIZED":
            return {
                ...state, isInitialized: action.isInitialized
            }
        default:
            return state
    }
}

export const setAppStatus = (state: AppState) => ({
    type: 'SET-APP-STATUS', payload: {state}
} as const)

export const setIsInitialized = (isInitialized: boolean) => (
    {type: "SET-IS-INITIALIZED", isInitialized} as const)

export const initializeApp = () => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatus({status: 'loading', error: null}))
    try {
        const res = await authAPI.me()
        dispatch(setUsersData(res.data))
        dispatch(setIsLoggedIn(true))
        dispatch(setAppStatus({status: 'succeeded', error: null}))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus({status: 'failed', error: error}))
    } finally {
        dispatch(setIsInitialized(true))
    }
}
