import { useContext, useState } from 'react'
import AppContext from '../AppContext'

function Test({ depth = 0 }) {
  const { increment } = useContext(AppContext)
  console.log(increment)
  console.log('test')
  return <div>{increment}</div>
}

export default function Lesson10() {
  const { setVariable } = useContext(AppContext)
  return (
    <div>
      <button onClick={() => setVariable((oldValue) => oldValue + 10)}>
        Increment
      </button>
      <Test />
    </div>
  )
}
