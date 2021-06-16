import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import AppContext from '../AppContext'

const Context = createContext({
  list: [],
  pushToList: (newValue) => {},
})

function CustomButton() {
  const { pushToList } = useContext(Context)
  return (
    <button type="button" onClick={() => pushToList(Math.random())}>
      Add random value
    </button>
  )
}

function Custom1() {
  return (
    <div>
      <Custom2 />
    </div>
  )
}

function Custom2() {
  const { list } = useContext(Context)
  const value = useMemo(() => {
    let values = 0
    for (let i = 0; i < list.length; i += 1) {
      values += list[i]
    }
    return values / (list.length || 1)
  }, [list])
  return <div>{value}</div>
}

function Test(props) {
  console.log(props)
  return null
}

function Custom3() {
  return <Context.Consumer>{Test}</Context.Consumer>
}

function DisplayList() {
  return (
    <div>
      <CustomButton />
      <Custom1 />
      <Custom3 />
    </div>
  )
}

export default function Lesson11() {
  const { increment } = useContext(AppContext)
  const [list, setList] = useState([])

  const displayIncrement = useCallback(() => {
    console.log(increment)
  }, [])

  const pushToList = (value) => {
    setList((oldList) => [value, ...oldList])
  }

  return (
    <Context.Provider
      value={{
        list,
        pushToList,
        margin: '10',
      }}
    >
      <DisplayList />
      <button type="button" onClick={displayIncrement}>
        Display increment
      </button>
    </Context.Provider>
  )
}
