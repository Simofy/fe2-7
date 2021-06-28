import {
  Component,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

class ChangeValue extends Component {
  state = {
    value: 10,
  }
  getInternalState() {
    return this.state.value
  }
  changeValue(value) {
    this.setState({
      value,
    })
  }
  render() {
    return this.state.value
  }
}

function ChangeValueFunction({}, ref) {
  const [value, setValue] = useState(10)
  useImperativeHandle(
    ref,
    () => ({
      getInternalState() {
        return value
      },
      changeValue(value) {
        setValue(value)
      },
    }),
    [value]
  )
  return value
}

const ChangeValueFunctionWithRef = forwardRef(ChangeValueFunction)

export default function Lesson16() {
  const [value, setValue] = useState(10)
  const changeValueRef = useRef(null)
  useEffect(() => {
    if (changeValueRef.current) {
      changeValueRef.current.changeValue(value)
    }
  }, [value, changeValueRef.current])
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        type="button"
        onClick={() => console.log(changeValueRef.current.getInternalState())}
      >
        Get value
      </button>
      <ChangeValueFunctionWithRef ref={changeValueRef} />
    </div>
  )
}
