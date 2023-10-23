import { ControlStateType, ActionType } from "./homeServices.props"

export const controlReducer = (state: ControlStateType, action: ActionType) => {
  if (action.type === "FILTER") {
    return {
      ...state,
      filtered: action.payload
    }
  }

  if (action.type === "REGION") {
    return {
      ...state,
      selected: action.payload
    }
  }

  return state
}
