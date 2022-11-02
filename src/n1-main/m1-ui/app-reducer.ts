
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
        default: return state
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