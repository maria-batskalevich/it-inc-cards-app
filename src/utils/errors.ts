import {setAppError} from "../n1-main/m1-ui/app-reducer";
import {AppDispatch} from "../n1-main/m2-bll/store";


export const errorsHandler = (error: any, dispatch: AppDispatch) => {
    dispatch(setAppError(error.response ? error.response.data.error : error))
}