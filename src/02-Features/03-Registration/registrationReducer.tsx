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

export const registrationAC = (isRegistered: boolean) => (
    {type: "REGISTRATION_CASE", payload: {isRegistered}} as const
)
type RegistrationACType = ReturnType<typeof registrationAC>

type ActionType = RegistrationACType


