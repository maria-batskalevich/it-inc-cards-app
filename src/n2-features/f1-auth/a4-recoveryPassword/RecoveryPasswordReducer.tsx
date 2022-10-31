const initialState = {
    someProperty: ''
}
type InitialStateType = {
    someProperty: string
}

export const RecoveryPasswordReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "RECOVERY_PASSWORD_CASE":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
const RecoveryPasswordReducerAC = (param: string) => (
    {type: 'RECOVERY_PASSWORD_CASE', payload: {param}} as const
)

type RecoveryPasswordReducerACType = ReturnType<typeof RecoveryPasswordReducerAC>

type ActionType = RecoveryPasswordReducerACType