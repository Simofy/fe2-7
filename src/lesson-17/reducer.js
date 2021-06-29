import { types } from './const'

const defaultState = {
  clickCount: 0,
}

export const lesson17Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, clickCount: state.clickCount + 1 }
    default:
      return state
  }
}
