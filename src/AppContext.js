import { createContext } from 'react'

const AppContext = createContext({
  increment: 0,
  user: null,
})

export default AppContext
