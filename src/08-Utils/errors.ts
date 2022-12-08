import {Dispatch} from 'redux';
import axios, {AxiosError} from 'axios';
import {setAppError} from "../00-App/app-reducer";


export const errorUtils = (e: Error | AxiosError<{ error: string }>, dispatch: Dispatch<ReturnType<typeof setAppError>>) => {
    if (axios.isAxiosError(e)) {
        const err = e as AxiosError<{ error: string }>
        const error = err.response?.data ? err.response.data.error : err.message
        dispatch(setAppError(error))
    } else {
        dispatch(setAppError(`Native error ${e.message}`))
    }
}