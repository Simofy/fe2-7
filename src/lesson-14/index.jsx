import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

export default function Lesson14() {
  return <div />
}

class TestComponent extends React.Component {
  render() {
    return <div />
  }
}

function CustomComponentStateless({ size }) {
  return (
    <div
      style={{
        fontSize: `${size}px`,
      }}
    />
  )
}

function StatefulComponent() {
  const [state, setState] = useState(() => {
    // Expensive calculation
    return 1
  })
  setState((oldState) => {
    return oldState + 2
  })
  setState(state + 2)
  if (state % 2) {
    return <div>Not even</div>
  }
  return <div>Even</div>
}

const customMethod = () => null

const test = {
  test1: {
    alio: 'Valio',
  },
}

test.test1.ir = 'internetas'

const test1 = { ...test }

test1.number = 10

function EffectComponent({ value }) {
  useEffect(() => {
    // fetch
    // init data
    //
    return () => {}
  }, [])

  useEffect(() => {
    customMethod(value)
  }, [value])
}

const ContextTest = createContext({})

function CustomComponent() {
  const context = useContext(ContextTest)
}

function ContextComponent() {
  const context = {}
  return (
    <ContextTest.Provider value={context}>
      <CustomComponent />
    </ContextTest.Provider>
  )
}

function OtherHooks() {
  const totalNumber = useMemo(() => {
    // Expensive repetitive calculation
    return 0
  }, [])

  const callback = useCallback(() => {}, [])

  const elementRef = useRef(null)

  return (
    <div ref={elementRef}>
      {[].map(() => (
        <div />
      ))}
    </div>
  )
}
