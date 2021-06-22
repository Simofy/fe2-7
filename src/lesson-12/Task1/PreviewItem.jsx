import { useContext, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import TaskContext from './TaskContext'

export default function PreviewItem() {
  const { itemId } = useParams()
  const { list } = useContext(TaskContext)
  const item = useMemo(() => {
    return list.find(({ id }) => id === itemId)
  }, [itemId, list])

  if (!item) {
    return <h1>Item not found</h1>
  }
  const { name, price, vegan } = item
  return (
    <div>
      <h3>Name</h3>
      <div>{name}</div>
      <h3>Price</h3>
      <div>{price}</div>
      <h3>Vegan</h3>
      <div>{vegan ? 'vegan' : 'Non-vegan'}</div>
    </div>
  )
}
