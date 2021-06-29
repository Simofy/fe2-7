import { useContext, useEffect, useMemo, useState } from 'react'
import AppContext from '../AppContext'
import { randomHexColor } from '../helpers'

/**
 * Returns a increment from AppContext by power of 2, and a user favorite color.
 */
function useIncrementAndColor() {
  const { increment, user } = useContext(AppContext)
  const newIncrement = useMemo(() => increment ** 2, [increment])
  const [randomColor, setRandomColor] = useState(() => randomHexColor())
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const { id } = user
      setRandomColor(randomHexColor())
    }, 1000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [user])
  return [newIncrement, randomColor]
}

function useNumberPowerOf(initNumber, initPower) {
  const [number, setNumber] = useState(initNumber)
  const [power, setPower] = useState(initPower)
  const [calculatedValue, setCalculatedValue] = useState(
    () => initNumber ** initPower
  )
  useEffect(() => {
    setCalculatedValue(number ** power)
  }, [number, power])

  return [calculatedValue, setNumber, setPower]
}

function HexDisplay() {
  const [, randomColor] = useIncrementAndColor()
  return (
    <div
      style={{
        color: 'white',
        background: randomColor,
      }}
    >
      {randomColor}
    </div>
  )
}

export default function CustomHooks() {
  const { increment, user } = useContext(AppContext)
  const [newIncrement, randomColor] = useIncrementAndColor()

  const [incrementTest, setIncrementTest] = useState(100)
  const [incrementTest1, setIncrementTest1] = useState(10)
  const [calculatedNumber, setNumber, setPower] = useNumberPowerOf(
    incrementTest1,
    incrementTest
  )
  useEffect(() => {
    setPower(incrementTest)
  }, [incrementTest])

  useEffect(() => {
    setNumber(incrementTest1)
  }, [incrementTest1])
  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => setIncrementTest((old) => old + 1)}
        >
          Increment power
        </button>
        <button
          type="button"
          onClick={() => setIncrementTest1((old) => old + 1)}
        >
          Increment number
        </button>
        <div>
          Calculated:
          {calculatedNumber}
        </div>
        <div>
          Power:
          {incrementTest}
        </div>
        <div>
          Number:
          {incrementTest1}
        </div>
      </div>
      {/* <div
        style={{
          color: randomColor,
          fontSize: '164px',
        }}
      >
        {newIncrement}
      </div>
      <HexDisplay /> */}
    </>
  )
}
