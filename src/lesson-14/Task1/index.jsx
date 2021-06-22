import { useState } from 'react'
import { randomHexColor } from '../../helpers'
import './Task1.scss'

export default function Task1() {
  const [size, setSize] = useState(50)
  const [bgColor, setBgColor] = useState(() => randomHexColor())
  return (
    <div>
      <input
        type="range"
        max="100"
        min="1"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
      />
      <button type="button" onClick={() => setBgColor(randomHexColor())}>
        Random color
      </button>
      <div className="task-1-container">
        <div
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: bgColor,
          }}
        />
      </div>
    </div>
  )
}
