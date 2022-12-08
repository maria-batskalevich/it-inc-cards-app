export type ApiResponseTypes = {
    resultCode: number;
    data: {};
};

export type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}
export type LogoutResponseType = {
    info: string,
    error?: string
}

export type AuthMeResponseType = {
    avatar: string,
    create?: number,
    email: string,
    isAdmin: boolean,
    name: string,
    publicCardPacksCount: number,
    rememberMe: boolean,
    token: string,
    updated: number,
    _id: string,
}

export type RegistrationResponseType = {
    addedUser: {}
    error?: string
}
export type RegistrationParamsType = {
    email: string,
    password: string
}