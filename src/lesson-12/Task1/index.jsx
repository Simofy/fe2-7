import { useCallback, useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Item from './Item'
import Items from './Items'
import PreviewItem from './PreviewItem'
import TaskContext from './TaskContext'

export default function Task1() {
  const [list, setList] = useState([])
  const [liked, setLiked] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingList, setLoadingList] = useState(true)

  const addExtraToList = async () => {
    setLoadingList(true)
    try {
      const response = await fetch(
        'https://simutis.dev/api/generate-shopping-cart?limit=10'
      )
      const data = await response.json()
      setList((oldData) => [...oldData, ...data])
    } catch (e) {
      console.error(e)
    }
    setLoadingList(false)
  }
  const scrolled = useCallback(
    (e) => {
      if (
        document.body.scrollHeight <=
        window.pageYOffset + window.innerHeight
      ) {
        if (!loadingList) {
          addExtraToList()
        }
        // console.log('test')
      }
    },
    [loadingList]
  )

  useEffect(() => {
    if (!loadingList) {
      document.addEventListener('scroll', scrolled)
      return () => {
        document.removeEventListener('scroll', scrolled)
      }
    }
  }, [loadingList])

  useEffect(() => {
    addExtraToList()
    const localData = localStorage.getItem('liked-items')
    try {
      if (localData) {
        setLiked(JSON.parse(localData))
      }
    } catch (e) {}
    setLoading(false)
  }, [])

  const handleLiked = useCallback(
    (id, type) => {
      switch (type) {
        case 'add':
          const item = list.find(({ id: itemId }) => itemId === id)
          if (item) {
            setLiked((oldLiked) => {
              return [...oldLiked, item]
            })
          }
          break
        case 'remove':
          setLiked((oldLiked) => {
            const index = oldLiked.findIndex(({ id: oldId }) => oldId === id)
            if (index !== -1) {
              oldLiked.splice(index, 1)
            }
            return [...oldLiked]
          })
          break
        default:
          break
      }
    },
    [list]
  )

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('liked-items', JSON.stringify(liked))
    }
    return () => {}
  }, [liked, loading])
  return (
    <TaskContext.Provider
      value={{
        handleLiked,
        liked,
        list,
      }}
    >
      <BrowserRouter>
        <Link to="/items">Items</Link>
        <Link to="/liked">Liked</Link>
        <Switch>
          <Route exact path="/items">
            <Items type="list" />
          </Route>
          <Route exact path="/liked">
            <Items type="liked" />
          </Route>
          <Route exact path="/item/:itemId/:test">
            <PreviewItem />
          </Route>
          <Route exact path="/"></Route>
        </Switch>
      </BrowserRouter>
    </TaskContext.Provider>
  )
}
