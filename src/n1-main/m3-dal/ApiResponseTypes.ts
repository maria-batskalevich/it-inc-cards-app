export type ApiResponseTypes = {
    resultCode: number;
    data: {};
};

export type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

export type UserInfoResponseType = {
    _id: string,
    email: string,
    name: string,
    avatar?: string,
    publicCardPacksCount: number,
}

export type ResponseType = {
    _id: string,
    email: string,
    name: string,
    avatar?: string,
    publicCardPacksCount: number,
    created: Date,
    updated: Date,
    isAdmin: boolean,
    verified: boolean,
    rememberMe: boolean,
    error?: string,
}