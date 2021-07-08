import { createContext } from 'react'

const AppContext = createContext({
  increment: 0,
  user: {},
  setVariable: () => {},
})

export default AppContext
