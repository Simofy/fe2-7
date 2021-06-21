import { createContext } from 'react'

const TaskContext = createContext({
  list: [],
  liked: [],
  handleLiked: (id, type) => {},
})

export default TaskContext
