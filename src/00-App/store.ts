import {AnyAction, applyMiddleware, combineReducers} from 'redux';
import {appReducer} from "./app-reducer";
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {authReducer} from "../02-Features/auth-reducer";
import { legacy_createStore as createStore } from 'redux';


const RootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
})

export const store = createStore(RootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof RootReducer>
// export type AppDispatch = typeof store.dispatch
export type AppDispatch = ThunkDispatch<RootStateType, unknown, RootActionsType>
export type RootActionsType = AnyAction
export type RootThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, RootActionsType>

// @ts-ignore
window.store = store