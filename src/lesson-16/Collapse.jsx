import React, {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

function Button({ toggleState, collapsed }) {
  return <button onClick={toggleState}>{collapsed ? 'Open' : 'Close'}</button>
}

function CollapsibleDiv(prop, ref) {
  const [collapsed, setCollapsed] = useState(false)

  useImperativeHandle(
    ref,
    () => ({
      collapsed,
      toggleState() {
        setCollapsed((oldCollapsed) => !oldCollapsed)
      },
    }),
    [collapsed]
  )

  return (
    <div
      style={{
        width: '200px',
        height: collapsed ? '0px' : '200px',
        background: '#faf',
        transition: 'height 200ms',
      }}
    ></div>
  )
}

const CollapsibleDivWithRef = forwardRef(CollapsibleDiv)

export default function CollapseComponent() {
  const collapsibleDivRef = useRef(null)
  console.log(collapsibleDivRef.current?.collapsed)
  const [, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])
  return (
    <>
      <CollapsibleDivWithRef ref={collapsibleDivRef} />
      <Button
        toggleState={collapsibleDivRef.current?.toggleState}
        collapsed={collapsibleDivRef.current?.collapsed}
      />
    </>
  )
}
