import { types } from './const'

const setListAction = (payload = []) => ({
  type: types.SET_LIST,
  payload,
})

const addToCartAction = (payload = '') => ({
  type: types.ADD_TO_CART,
  payload,
})

const removeFromCartAction = () => ({
  type: types.REMOVE_FROM_CART,
})

const showModal = (payload) => ({
  type: types.SHOW_MODAL,
  payload,
})

const hideModal = () => ({
  type: types.HIDE_MODAL,
})

export const actions = {
  setListAction,
  addToCartAction,
  removeFromCartAction,
  showModal,
  hideModal,
}
