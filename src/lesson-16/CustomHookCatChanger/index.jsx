import { useMemo } from 'react'
import { useEffect, useState } from 'react'
import { randomHexColor } from '../../helpers'
import cat1 from './cat1.jpg'
import cat2 from './cat2.jpg'
import cat3 from './cat3.jpg'
import './Task2.scss'

const catsArray = [cat1, cat2, cat3]

function useGenerateInterval(initList, initInterval) {
  const list = useMemo(() => initList, [])
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((oldIndex) => (oldIndex + 1) % list.length)
    }, initInterval)
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  return list[index]
}

export default function Task2() {
  const cat = useGenerateInterval(catsArray, 1000)
  const randomList = useMemo(() => {
    const toReturn = []
    for (let i = 0; i < 10; i += 1) {
      toReturn.push(randomHexColor())
    }
    return toReturn
  }, [])
  const randomListItem = useGenerateInterval({ ...randomList, length: 2 }, 1000)
  const stringItem = useGenerateInterval('Alio valio ir internetas', 1000)
  return (
    <div>
      <div
        className="task-2-container"
        style={{
          backgroundColor: randomListItem,
        }}
      >
        <img src={cat} alt="" />
        {stringItem}
      </div>
    </div>
  )
}
