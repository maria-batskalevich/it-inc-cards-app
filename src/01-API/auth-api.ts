import axios from 'axios';
import {LoginDataType, LogoutResponse, UserDataType} from "./ApiResponseTypes";

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    // baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

export const authAPI = {
    login (data: LoginDataType) {
        return instance.post<UserDataType>('auth/login', data)
    },

    logout ()  {
       return instance.delete<LogoutResponse>('auth/me')
    },
    me () {
        return instance.post<UserDataType>('auth/me')
    }
}




