import { useEffect, useState } from 'react'
import { randomHexColor } from '../../helpers'
import './Task3.scss'

const getHexToDec = (stringValue) => {
  let leftSide = Number(stringValue)
  if (stringValue === 'a') {
    leftSide = 10
  }
  if (stringValue === 'b') {
    leftSide = 11
  }
  if (stringValue === 'c') {
    leftSide = 12
  }
  if (stringValue === 'd') {
    leftSide = 13
  }
  if (stringValue === 'e') {
    leftSide = 14
  }
  if (stringValue === 'f') {
    leftSide = 15
  }
  return leftSide
}

function DisplayColorCode({ color = '' }) {
  const [colorCode, setColorCode] = useState('')
  useEffect(() => {
    let test = ''
    for (let i = 1; i <= 6; i += 2) {
      let leftSide = getHexToDec(color[i])
      let rightSide = getHexToDec(color[i + 1])
      test += `${leftSide * 16 + rightSide} `
    }
    setColorCode(test)
    // setColorCode(
    //   `Red: ${parseInt(`0x${color.substr(1, 2)}`)}, green: ${parseInt(
    //     `0x${color.substr(3, 2)}`
    //   )}, blue: ${parseInt(`0x${color.substr(5, 2)}`)},`
    // )
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
