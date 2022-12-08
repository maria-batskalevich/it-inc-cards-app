import {LoginDataType, AuthMeResponseType, RegistrationParamsType} from "../01-API/ApiResponseTypes";
import {setAppIsInitialized, setAppStatus, setAppSuccess} from "../00-App/app-reducer";
import {authAPI} from "../01-API/auth-api";
import {RootThunkType} from "../00-App/store";
import {errorUtils} from "../08-Utils/errors";

const InitialState = {
    _id: '' as string | undefined,
    email: '',
    name: '',
    avatar: '',
    publicCardPacksCount: null as number | null,
}

type AuthInitialStateType = typeof InitialState

type AuthActionsType =
    | ReturnType<typeof setAuthMe>
    | ReturnType<typeof setLoginData>
    | ReturnType<typeof setLogout>

export const authReducer = (
    state: AuthInitialStateType = InitialState,
    action: AuthActionsType): AuthInitialStateType => {
    switch (action.type) {
        case "auth/AUTH_ME":
        case "auth/SET_LOGIN_DATA":
            return {
                ...state, ...action.payload
            }
        case 'auth/LOG_OUT':
            return {_id: '', email: '', name: '', avatar: '', publicCardPacksCount: null}
        default:
            return state;
    }
}

export const setAuthMe = (payload: AuthMeResponseType) => (
    {type: 'auth/AUTH_ME', payload} as const)

export const setLoginData = (payload: AuthMeResponseType | null) => (
    {type: 'auth/SET_LOGIN_DATA', payload} as const)

export const setLogout = () => (
    {type: 'auth/LOG_OUT'} as const)

export const authMeTC = ():  RootThunkType => async (dispatch) => {
    dispatch(setAppStatus('loading'))
    try {
        const res = await authAPI.me()
        dispatch(setAuthMe(res.data))
    } catch (e: any) {
        errorUtils(e, dispatch)
    } finally {
        dispatch(setAppStatus('idle'))
        dispatch(setAppIsInitialized(true))
    }}

export const loginTC = (data: LoginDataType): RootThunkType => async (dispatch) => {
    dispatch(setAppStatus('loading'))
    try {
        const response = await authAPI.login(data)
        dispatch(setLoginData(response.data))
        dispatch(setAppSuccess('You are sign in successfully'))
        dispatch(setAppStatus('succeeded'))
    } catch (e: any) {
        errorUtils(e, dispatch)
    } finally {
        dispatch(setAppStatus('idle'))
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

export const logoutTC = (): RootThunkType => async (dispatch) => {
    dispatch(setAppStatus('loading'))
    try {
        await authAPI.logout()
        dispatch(setLogout())
        dispatch(setAppSuccess('You are logout successfully'))
    } catch (e: any) {
        errorUtils(e, dispatch)
    } finally {
        dispatch(setAppStatus('idle'))
    }
}
export const registrationTC = (data: RegistrationParamsType): RootThunkType => async (dispatch) => {
    dispatch(setAppStatus('loading'))
    try {
        await authAPI.registration(data)
        dispatch(setAppSuccess('Registration successfully completed!'))
        dispatch(setAppStatus('succeeded'))
        // return true
    } catch (e: any) {
        dispatch(setAppStatus('failed'))
        errorUtils(e, dispatch)
        return false
    }
        finally {
        dispatch(setAppStatus('idle'))
    }
}

