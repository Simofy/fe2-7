import { useState } from 'react'
import './Task4.scss'

function fibonacci(num) {
  var a = 1,
    b = 0,
    temp

  while (num >= 0) {
    temp = a
    a = a + b
    b = temp
    num--
  }

  return b
}

export default function Task4() {
  const [currentNumber, setCurrentNumber] = useState(1)
  const [fibonacciSequence, setFibonacciSequence] = useState('1')
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          const number = fibonacci(currentNumber)
          setCurrentNumber(currentNumber + 1)
          setFibonacciSequence((oldSequence) => `${oldSequence} ${number}`)
        }}
      >
        Add fibonacci sequence
      </button>
      <div className="task-4-container">{fibonacciSequence}</div>
    </div>
  )
}
