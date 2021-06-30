import { useEffect, useMemo } from 'react'
import { Table } from 'react-bootstrap'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { actions } from './actions'
import { store } from './store'
import './lesson18.scss'
import selectors from './selectors'

function Element({ item, action, idKey, actionType }) {
  const { [idKey]: id, name, price, vegan } = item
  const dispatch = useDispatch()
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{vegan ? 'Vegan' : '-'}</td>
      <td>
        <button type="button" onClick={() => dispatch(action(id))}>
          {actionType ? 'Add' : 'Remove'}
        </button>
      </td>
    </tr>
  )
}

function TableWrapper({ selector, action, actionType, idKey }) {
  const list = useSelector(selector)
  const generateList = useMemo(
    () =>
      list.map((item) => (
        <Element
          key={item[idKey]}
          item={item}
          action={action}
          actionType={actionType}
          idKey={idKey}
        />
      )),
    [list]
  )
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Vegan</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{generateList}</tbody>
    </Table>
  )
}

function Lesson18() {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('https://simutis.dev/api/generate-shopping-cart?limit=10')
      .then((response) => response.json())
      .then((data) => dispatch(actions.setListAction(data)))
  }, [])
  return (
    <div className="lesson18-container">
      <TableWrapper
        selector={selectors.selectList}
        action={actions.addToCartAction}
        idKey={'id'}
        actionType
      />
      <TableWrapper
        selector={selectors.selectCart}
        action={actions.removeFromCartAction}
        actionType={false}
        idKey={'customId'}
      />
    </div>
  )
}

export default function Lesson18Wrapper() {
  return (
    <Provider store={store}>
      <Lesson18 />
    </Provider>
  )
}
