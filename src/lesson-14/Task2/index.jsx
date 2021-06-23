import { useEffect, useState } from 'react'
import cat1 from './cat1.jpg'
import cat2 from './cat2.jpg'
import cat3 from './cat3.jpg'
import './Task2.scss'

const catsArray = [cat1, cat2, cat3]

export default function Task2() {
  const [cat, setCat] = useState(1)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCat((oldCat) => (oldCat + 1) % catsArray.length)
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  return (
    <div>
      <div className="task-2-container">
        <img src={catsArray[cat]} alt="" />
      </div>
    </div>
  )
}
