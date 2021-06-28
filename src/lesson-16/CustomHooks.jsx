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
  const [newIncrement, randomColor] = useIncrementAndColor()
  return (
    <>
      <div
        style={{
          color: randomColor,
          fontSize: '164px',
        }}
      >
        {newIncrement}
      </div>
      <HexDisplay />
    </>
  )
}
