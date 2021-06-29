import { types } from './const'

const defaultState = {
  data: 0,
}

export const task10ConvertedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_FORM_DATA:
      return { ...state, data: action.payload }
    default:
      return state
  }
}
