import axios, {AxiosResponse} from 'axios';
import {LoginDataType, LogoutResponse, UserInfoResponseType} from "./ApiResponseTypes";


// const settings = {
//     withCredentials: true,
//     headers: {
//         'API-KEY': ''
//     }
// }

// const instance = axios.create({
//     baseURL: "http://localhost:7542/2.0/"
//     // ...settings
// });
//
// export const API = {
//     appAPI: {
//         fakeRequest: (param: string) =>
//             instance.post<string, ApiResponseTypes>('', {param}),
//     },
//     loginAPI: {
//         login: (param: string) => instance.post<string, ApiResponseTypes>('', {param}),
//     },
//     recoveryPasswordAPI: {
//         recoveryPass: (param: string) =>
//             instance.post<string, ApiResponseTypes>('', {param}),
//     },
// };

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    withCredentials: true,
})

export const authAPI = {
    login (data: LoginDataType) {
        return instance.post<LoginDataType, AxiosResponse<UserInfoResponseType>>('auth/login', data)
    },

    logout ()  {
       return instance.delete<LogoutResponse>('auth/me')
    },
    auth () {
        return instance.post<{}, AxiosResponse<UserInfoResponseType>>('auth/me')
    }
}



