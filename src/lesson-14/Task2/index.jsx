import { useEffect, useState } from 'react'
import cat1 from './cat1.jpg'
import cat2 from './cat2.jpg'
import cat3 from './cat3.jpg'
import './Task2.scss'

const cats = {
  cat1,
  cat2,
  cat3,
}

export default function Task2() {
  const [cat, setCat] = useState(1)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCat((oldCat) => ((oldCat + 1) % 3) + 1)
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  return (
    <div>
      <div className="task-2-container">
        <img src={cats[`cat${cat}`]} />
      </div>
    </div>
  )
}
