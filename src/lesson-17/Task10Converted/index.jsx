import { Provider, useDispatch, useSelector } from 'react-redux'
import { actions } from './actions'
import { formFields } from './const'
import { store } from './store'

function Form() {
  const dispatch = useDispatch()
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const { target } = e
        const newData = {}
        Object.values(formFields).forEach((value) => {
          newData[value] = target[value].value
        })
        dispatch(actions.changeFormData(newData))
      }}
    >
      <input name={formFields.name} />
      <textarea name={formFields.loveStory} />
      <input name={formFields.email} />
      <button type="submit">Save </button>
    </form>
  )
}

function Display() {
  const data = useSelector(({ data }) => data)
  return (
    <div>
      {Object.entries(formFields).map(([key, value]) => (
        <>
          <h3>{key}</h3>
          <p>{data[value]}</p>
        </>
      ))}
    </div>
  )
}

export default function Task10() {
  return (
    <Provider store={store}>
      <Form />
      <Display />
    </Provider>
  )
}
