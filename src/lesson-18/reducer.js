import shortid from 'shortid'
import { types } from './const'

const defaultState = {
  cart: [],
  list: [],
}

export const lesson18Reducer = (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.SET_LIST:
      return { ...state, list: payload }
    case types.ADD_TO_CART: {
      const item = state.list.find(({ id }) => id === payload)
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...item,
            customId: shortid(),
          },
        ],
      }
    }
    case types.REMOVE_FROM_CART: {
      const itemIndex = state.cart.findIndex(
        ({ customId }) => customId === payload
      )
      state.cart.splice(itemIndex, 1)
      return { ...state, cart: [...state.cart] }
    }
    default:
      return state
  }
}
