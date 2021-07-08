import { useEffect, useState } from 'react'

function DummyComponent({ data, setLoading }) {
  const [dummyData, setDummyData] = useState(null)
  useEffect(() => {
    console.log(data[1].toString())
    setLoading(true)
    const timeoutId = setTimeout(() => {
      setDummyData(data[1].toString())
      // setLoading(false)
      setLoading(false)
    }, 1000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])
  return <div>{dummyData}</div>
}

export default function Lesson21() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setData([1, 2, 3, 4, 5])
      setLoading(false)
    }, 1000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])
  if (loading) {
    return <div>Loading</div>
  }
  return (
    <div>
      Hello
      <DummyComponent data={data} setLoading={setLoading} />
    </div>
  )
}
