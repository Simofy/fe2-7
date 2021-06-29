import { types } from './const'

const incrementClickCount = () => ({
  type: types.INCREMENT,
})

export const actions = {
  incrementClickCount,
}
