import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const TableContext = createContext({
  renderedData: null,
  setData: () => {},
})

export default function TableWrapper() {
  const [data, setData] = useState(null)
  console.log('TableWrapper')
  return (
    <TableContext.Provider
      value={{
        renderedData: data,
        setData,
      }}
    >
      <Table />
      <TableFetch />
    </TableContext.Provider>
  )
}

function TableFetch() {
  const [updated, setUpdated] = useState(0)
  const [rawData, setRawData] = useState([])
  const { setData } = useContext(TableContext)
  console.log('TableFetch')
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch('https://simutis.dev/api/generate-rectangle')
        .then((response) => response.json())
        .then(({ updated: apiUpdated, data: apiData }) => {
          if (apiUpdated !== updated) {
            setUpdated(apiUpdated)
            setRawData(apiData)
          }
        })
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [updated])

  useEffect(() => {
    setData(
      rawData.map((row) => {
        let sum = 0
        row.forEach((value) => (sum += value))
        return <div key={`${sum}_${Math.random()}`}>{sum}</div>
      })
    )
  }, [updated])

  return null
}

function Table() {
  console.log('Table')
  const { renderedData } = useContext(TableContext)
  return <div>{renderedData}</div>
}
