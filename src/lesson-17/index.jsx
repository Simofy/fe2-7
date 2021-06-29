import { Provider, useDispatch, useSelector } from 'react-redux'
import Task7 from '../lesson-14/Task7'
import { actions } from './actions'
import { store } from './store'

function Task7Wrapper() {
  const dispatch = useDispatch()
  return (
    <div>
      <Task7 onClick={() => dispatch(actions.incrementClickCount())} />
    </div>
  )
}

function AnotherTestWrapper() {
  const clickCount = useSelector(({ clickCount }) => clickCount)
  return clickCount
}

function TestWrapper() {
  return <AnotherTestWrapper />
}

export default function Lesson17() {
  return (
    <Provider store={store}>
      <Task7Wrapper />
      <TestWrapper />
    </Provider>
  )
}
