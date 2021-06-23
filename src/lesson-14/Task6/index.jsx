import { useEffect, useMemo, useState } from 'react'
import chineseCharacters from './characters'
import './Task6.scss'

const getRandomChar = () =>
  chineseCharacters[Math.floor(Math.random() * chineseCharacters.length)]

function MatrixCharacter({ state }) {
  const [character, setCharacter] = useState(() => getRandomChar())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCharacter(getRandomChar())
    }, Math.random() * 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [state])
  return character
}

function MatrixColumn() {
  const charList = useMemo(() => {
    const toReturn = []
    for (let i = 0; i < 10; i += 1) {
      toReturn.push(<MatrixCharacter key={`_${i}`} state={false} />)
    }
    return toReturn
  }, [])
  return <div className="task-6-column">{charList}</div>
}

export default function Task6() {
  const columnList = useMemo(() => {
    const toReturn = []
    for (let i = 0; i < 10; i += 1) {
      toReturn.push(<MatrixColumn key={`_${i}`} />)
    }
    return toReturn
  }, [])
  return <div className="task-6-container">{columnList}</div>
}
