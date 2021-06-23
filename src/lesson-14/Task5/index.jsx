import { useMemo, useState } from 'react'
import { randomHexColor } from '../../helpers'
import './Task5.scss'

function Grid() {
  const bgColor = useMemo(() => randomHexColor(), [])
  const [clicked, setClicked] = useState(false)
  return (
    <div
      onClick={() => setClicked(true)}
      className="task-5-cell"
      style={{
        backgroundColor: bgColor,
      }}
    >
      {clicked ? (
        <>
          <Grid />
          <Grid />
          <Grid />
          <Grid />
        </>
      ) : null}
    </div>
  )
}

export default function Task5() {
  return (
    <div className="task-5-container">
      <Grid />
    </div>
  )
}
