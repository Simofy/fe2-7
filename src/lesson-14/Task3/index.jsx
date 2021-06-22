import { useEffect, useState } from 'react'
import { randomHexColor } from '../../helpers'
import './Task3.scss'

function DisplayColorCode({ color = '' }) {
  const [colorCode, setColorCode] = useState('')
  useEffect(() => {
    setColorCode(
      `Red: ${parseInt(`0x${color.substr(1, 2)}`)}, green: ${parseInt(
        `0x${color.substr(3, 2)}`
      )}, blue: ${parseInt(`0x${color.substr(5, 2)}`)},`
    )
  }, [color])
  return colorCode
}

export default function Task3() {
  const [bgColor, setBgColor] = useState(() => randomHexColor())
  return (
    <div>
      <button type="button" onClick={() => setBgColor(randomHexColor())}>
        Random hex color
      </button>
      <div className="task-1-container">
        <div
          style={{
            width: `100px`,
            height: `100px`,
            backgroundColor: bgColor,
          }}
        />
        <DisplayColorCode color={bgColor} />
      </div>
    </div>
  )
}
