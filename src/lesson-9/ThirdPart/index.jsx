import { useEffect, useMemo, useState } from 'react'

export default function ThirdPart({ test1234 = 10 }) {
  // const [randomNumber, setRandomNumber] = useState(Math.random() * test);
  // useEffect(() => {
  //   setRandomNumber(Math.random() * test);
  // }, [test]);

  const array2D = useMemo(() => {
    const list = []
    for (let i = 0; i < 5000; i += 1) {
      const row = []
      for (let k = 0; k < 5000; k += 1) {
        row.push(Math.floor(Math.random() * 10))
      }
      list.push(row)
    }
    return list
  }, [])

  const test1 = {
    d: 10,
  }

  // console.log(randomNumber);
  const parsedData = useMemo(() => {
    return array2D.map((row, index) => {
      let sum = 0
      row.forEach((value) => (sum += value))
      // eslint-disable-next-line react/react-in-jsx-scope
      return <div key={`_${sum}-${index}`}>{sum}</div>
    })
  }, [array2D])
  return <div>{parsedData}</div>
}
