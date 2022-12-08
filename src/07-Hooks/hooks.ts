import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {AppDispatch, RootStateType} from "../00-App/store";


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch=  () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector