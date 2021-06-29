import { types } from './const'

const changeFormData = (payload = {}) => ({
  type: types.CHANGE_FORM_DATA,
  payload,
})

export const actions = {
  changeFormData,
}
