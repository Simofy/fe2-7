import { createContext, useContext, useState } from 'react'

const task10Context = createContext({
  data: {},
  setData: () => {},
})

const formFields = {
  name: 'name',
  email: 'email',
  loveStory: 'loveStory',
}

function Form() {
  const { setData } = useContext(task10Context)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const { target } = e
        const newData = {}
        Object.values(formFields).forEach((value) => {
          newData[value] = target[value].value
        })
        setData(newData)
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
  const { data } = useContext(task10Context)
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
  const [formData, setFormData] = useState({})
  return (
    <task10Context.Provider
      value={{
        data: formData,
        setData: setFormData,
      }}
    >
      <Form />
      <Display />
    </task10Context.Provider>
  )
}
