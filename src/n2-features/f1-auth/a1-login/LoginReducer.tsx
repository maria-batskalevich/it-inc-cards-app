import React from "react";
import {API} from "../../../n1-main/m3-dal/API";

type InitialStateType = {
    someProperty: string
}

const InitialState = {
    someProperty: ''
}

export const LoginReducer = (
    state: InitialStateType = InitialState,
    action: ActionType): InitialStateType => {
    switch (action.type) {
        case "LOGIN_CASE":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

const LoginAC = (param: string) => (
    {type: 'LOGIN_CASE', payload: {param}} as const)
type LoginACType = ReturnType<typeof LoginAC>

export const testTC = (param: string) => () => {
    API.appAPI
        .fakeRequest(param)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })

}

type ActionType = LoginACType