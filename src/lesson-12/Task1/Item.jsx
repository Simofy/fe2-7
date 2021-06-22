import { useHistory } from 'react-router-dom'
import './ItemStyle.scss'

export default function Item({ id, name, price, onClick, type }) {
  const history = useHistory()
  return (
    <div className="task-12-button">
      {name}-{price}
      <button onClick={onClick}>
        {type === 'full' ? 'Add to list' : 'Remove from list'}
      </button>
      <button
        onClick={() => {
          history.push(`/item/${id}`)
        }}
      >
        Preview
      </button>
    </div>
  )
}
