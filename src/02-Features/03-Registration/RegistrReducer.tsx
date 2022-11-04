type initialStateType = {
    someProperty: string
}
const initialState = {
    someProperty: ''
}
export const RegistrationReducer = (state: initialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "REGISTRATION_CASE":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

const RegistrAC = (param: string) => (
    {type: "REGISTRATION_CASE", payload: {param}} as const
)
type RegistrACType = ReturnType<typeof RegistrAC>

type ActionType = RegistrACType