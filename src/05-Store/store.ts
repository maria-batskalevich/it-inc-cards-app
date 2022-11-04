import {applyMiddleware, combineReducers} from 'redux';
import {appReducer} from "./reducers/app-reducer";
import thunk from 'redux-thunk';
import {authReducer} from "./reducers/auth-reducer";
import { legacy_createStore as createStore } from 'redux';


const RootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
})

export const store = createStore(RootReducer, applyMiddleware(thunk))

export type RootState= ReturnType<typeof RootReducer>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store