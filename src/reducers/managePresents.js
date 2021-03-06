export function managePresents(state = {
    numberOfPresents: 0
  }, action) {
  switch(action.type) {
    case "INCREASE":
      return {...state, 
        numberOfPresents: state.numberOfPresents + 1
      }
    case "DECREASE":
      return {...state,
        numberOfPresents: state.numberOfPresents - 1
      }
    default:
      return state 
  }
}
