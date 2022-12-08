import axios from 'axios';
import {
    LoginDataType,
    LogoutResponseType,
    AuthMeResponseType,
    RegistrationParamsType
} from "./ApiResponseTypes";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/' ,
    // baseURL: 'http://localhost:7542/2.0/',
    // baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

export const authAPI = {
    me() {
        return instance.post<AuthMeResponseType>('auth/me')
    },
    login(data: LoginDataType) {
        return instance.post<AuthMeResponseType>('auth/login', data)
    },
    logout() {
        return instance.delete<LogoutResponseType>('auth/me')
    },
    registration(data: RegistrationParamsType) {
        return instance.post<AuthMeResponseType>('auth/register', data)
    }

}




