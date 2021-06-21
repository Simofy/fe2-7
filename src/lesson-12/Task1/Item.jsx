import './ItemStyle.scss'

export default function Item({ name, price, onClick, type }) {
  return (
    <div className="task-12-button">
      {name}-{price}
      <button onClick={onClick}>
        {type === 'full' ? 'Add to list' : 'Remove from list'}
      </button>
    </div>
  )
}
