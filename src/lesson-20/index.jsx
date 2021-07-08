import { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { combineReducers, createStore } from 'redux'

const types = {
  leftAdd: 'left.component.add',
  leftRemove: 'left.component.remove',
  rightAdd: 'right.component.add',
  rightRemove: 'right.component.remove',
}

const actions = {}

Object.entries(types).forEach(([key, value]) => {
  actions[key] = (payload) => ({
    type: value,
    payload,
  })
})

const leftReducer = (state = 0, action) => {
  const { type, payload } = action
  switch (type) {
    case types.leftAdd:
      return state + 1
    case types.leftRemove:
      return state - 1

    default:
      return state
  }
}

const rightReducer = (state = 0, action) => {
  const { type, payload } = action
  switch (type) {
    case types.rightAdd:
      return state + 1
    case types.rightRemove:
      return state - 1
    default:
      return state
  }
}

const reducer = combineReducers({
  left: leftReducer,
  right: rightReducer,
})

const store = createStore(reducer)

function LessonMain() {
  const [left, right] = useSelector(({ left, right }) => [left, right])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.leftAdd(10))
  }, [])
  return (
    <div>
      {left}-{right}
    </div>
  )
}

export default function Lesson20() {
  return (
    <Provider store={store}>
      <LessonMain />
    </Provider>
  )
}
