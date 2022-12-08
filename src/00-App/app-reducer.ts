const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as null | string,
    success: null as null | string,
    isInitialized: false as boolean
}

 //types
export type InitialStateType = typeof initialState
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
type ActionsType =
    | ReturnType<typeof setAppError>
    | ReturnType<typeof setAppStatus>
    | ReturnType<typeof setAppSuccess>
    | ReturnType<typeof setAppIsInitialized>


export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "app/SET_APP_ERROR":
        case "app/SET_APP_STATUS":
        case "app/SET_APP_SUCCESS":
        case "app/SET_IS_APP_INITIALIZED":
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
}

//actionCreators
export const setAppError = (error: null | string) => (
    {type: 'app/SET_APP_ERROR', payload: {error}} as const)
export const setAppStatus = (status: RequestStatusType) => (
    {type: 'app/SET_APP_STATUS', payload: {status}} as const)
export const setAppSuccess = (success: null | string) => (
    {type: 'app/SET_APP_SUCCESS', payload: {success}} as const)
export const setAppIsInitialized = (isInitialized: boolean) => (
    {type: "app/SET_IS_APP_INITIALIZED", payload: {isInitialized}} as const)


// export const initializeApp = () => async (dispatch: Dispatch<ActionsType>) => {
//     dispatch(setAppStatus({status: 'loading', error: null}))
//     try {
//         const res = await authAPI.me()
//         dispatch(setLoginData(res.data))
//         dispatch(setIsLoggedIn(true))
//         dispatch(setAppStatus({status: 'succeeded', error: null}))
//     } catch (e: any) {
//         const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
//         dispatch(setAppStatus({status: 'failed', error: error}))
//     } finally {
//         dispatch(setIsInitialized(true))
//     }
// }
