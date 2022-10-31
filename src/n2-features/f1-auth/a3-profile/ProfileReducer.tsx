const initialState = {
    someProperty: ''
}
type initialStateType = {
    someProperty: string
}

export const ProfileReducer =(state: initialStateType = initialState, action: ActionType): initialStateType => {
  switch (action.type) {
      case "PROFILE_CASE":
          return {
              ...state,
              ...action.payload
          }
      default:
          return state
  }
}

const ProfileReducerAC = (param: string) => (
    {type: "PROFILE_CASE", payload: {param}} as const
)
type ProfileReducerType = ReturnType<typeof ProfileReducerAC>
type ActionType = ProfileReducerType