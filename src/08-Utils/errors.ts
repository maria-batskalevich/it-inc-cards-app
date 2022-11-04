import {setAppError} from "../05-Store/reducers/app-reducer";
import {AppDispatch} from "../05-Store/store";


export const errorsHandler = (error: any, dispatch: AppDispatch) => {
    dispatch(setAppError(error.response ? error.response.data.error : error))
}