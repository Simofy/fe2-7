import { createContext, useContext, useMemo, useState } from 'react'

const TableNewContext = createContext({
  color: 'red',
})

function Cell() {
  const { color } = useContext(TableNewContext)
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        margin: '8px',
        backgroundColor: color,
      }}
    ></div>
  )
}

export default function TableNew() {
  const [color, setColor] = useState('red')
  const parsedData = useMemo(() => {
    const list = []
    for (let i = 0; i < 10; i += 1) {
      list.push(<Cell />)
    }
    return list
  }, [])
  return (
    <TableNewContext.Provider
      value={{
        color,
      }}
    >
      {parsedData}
      <button
        onClick={() =>
          setColor('#' + (((1 << 24) * Math.random()) | 0).toString(16))
        }
      >
        Change color
      </button>
    </TableNewContext.Provider>
  )
}
