import { useContext, useMemo } from 'react'
import Item from './Item'
import TaskContext from './TaskContext'

const itemConfig = {
  ['liked']: {
    context: 'liked',
    type: 'liked',
    handleLiked: 'remove',
  },
  ['list']: {
    context: 'list',
    type: 'full',
    handleLiked: 'add',
  },
}

export default function Items({ type }) {
  const {
    context,
    type: itemType,
    handleLiked: handleLikedType,
  } = itemConfig[type]
  const { [context]: list, handleLiked } = useContext(TaskContext)
  const items = useMemo(() => {
    return list.map(({ id, name, price }) => (
      <Item
        key={id}
        onClick={() => handleLiked(id, handleLikedType)}
        name={name}
        type={itemType}
        id={id}
        price={price}
      />
    ))
  }, [list])

  return <div>{items}</div>
}
