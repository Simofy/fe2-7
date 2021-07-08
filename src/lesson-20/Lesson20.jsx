import { useState } from 'react'
import { useCallback } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { combineReducers, createStore } from 'redux'

const types = {
  leftIncrement: 'left.component.button.value.increment',
  leftDecrement: 'left.component.button.value.decrement',
  rightIncrement: 'right.component.button.value.increment',
  rightDecrement: 'right.component.button.value.decrement',
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
  console.log('leftReducer', type)
  switch (type) {
    case types.leftIncrement:
      return state + 1
    case types.leftDecrement:
      return state - 1
    default:
      return state
  }
}

const rightReducer = (state = [], action) => {
  const { type, payload } = action
  console.log('rightReducer', type)
  switch (type) {
    case types.rightIncrement:
      return [...state, payload]
    case types.rightDecrement:
      return [...state, payload]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  left: leftReducer,
  right: rightReducer,
  //
  test: combineReducers({
    left: leftReducer,
    right: rightReducer,
  }),
})

function App() {
  const { left, right, test } = useSelector(({ left, right, test }) => ({
    left,
    right,
    test,
  }))
  console.log(test)
  const dispatch = useDispatch()
  const onLeftClick = useCallback(() => dispatch(actions.leftIncrement()), [])
  const onRightClick = useCallback(
    () => dispatch(actions.rightIncrement(10)),
    []
  )
  return (
    <div>
      <button type="button" onClick={onLeftClick}>
        Left increment
      </button>
      <button type="button" onClick={onRightClick}>
        Right increment
      </button>
      {left}|{right.join('-')}
    </div>
  )
}

const store = createStore(rootReducer)

export default function Lesson20() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
