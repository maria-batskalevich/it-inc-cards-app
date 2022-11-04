export type ApiResponseTypes = {
    resultCode: number;
    data: {};
};

export type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}
export type LogoutResponse = {
    info: string,
    error: string
}

export type UserDataType = {
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
