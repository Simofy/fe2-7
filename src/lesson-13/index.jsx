import {
  Component,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

class CollapsibleContainer extends Component {
  state = {
    collapsed: false,
  }
  collapseDiv() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    return (
      <div
        style={{
          width: '100px',
          background: 'black',
          height: this.state.collapsed ? '10px' : '100px',
        }}
      ></div>
    )
  }
}

export default function Lesson13() {
  const testComponentRef = useRef(null)
  const divRef = useRef(null)
  const input2 = useRef(null)
  const input3 = useRef(null)

  useEffect(() => {
    console.log('test')
    function onMouseMove(e) {
      console.log(e.clientX)
    }
    divRef.current?.addEventListener('mousemove', onMouseMove)
    return () => {
      divRef.current?.removeEventListener('mousemove', onMouseMove)
    }
  }, [divRef.current])

  const [collapsed, setCollapsed] = useState(false)
  console.log(testComponentRef.current?.collapseDiv)
  const collapseDiv = () => {
    setCollapsed((oldValue) => !oldValue)
    testComponentRef.current?.collapseDiv()
  }

  return (
    <div ref={divRef}>
      <input ref={input2} />
      <input ref={input3} />
      <button onClick={collapseDiv}>Show values</button>
      <CollapsibleContainer ref={testComponentRef} />
    </div>
  )
}
