import { useEffect, useState } from 'react'
import './Task7.scss'

const catState = {
  hover: 'hover',
  click: 'click',
  idle: 'idle',
  default: 'default',
}

const catStateClass = {
  [catState.hover]: 'cat-hover',
  [catState.click]: 'cat-click',
  [catState.idle]: 'cat-idle',
  [catState.default]: 'cat-default',
}

export default function Task7({ onClick }) {
  const [prevState, setPrevState] = useState(catState.default)
  const [state, setState] = useState(catState.default)

  useEffect(() => {
    if (state === catState.default) {
      const timeoutId = setTimeout(() => setState(catState.idle), 2000)
      return () => clearTimeout(timeoutId)
    }
  }, [state])
  return (
    <div
      className="task-7-container"
      onMouseDown={() => {
        setPrevState(state)
        setState(catState.click)
        onClick && onClick()
      }}
      onMouseUp={() => setState(prevState)}
      onMouseEnter={() => setState(catState.hover)}
      onMouseLeave={() => setState(catState.default)}
    >
      <div className={catStateClass[state]} />
    </div>
  )
}
