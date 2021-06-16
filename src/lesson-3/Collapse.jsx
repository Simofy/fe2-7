import React, { createContext, useContext, useState } from 'react'

class Collapse extends React.Component {
  state = {
    collapsed: false,
  }
  toggleState() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    return (
      <div
        style={{
          width: '200px',
          height: this.state.collapsed ? '0px' : '200px',
          background: '#faf',
          transition: 'height 200ms',
        }}
      >
        <div></div>
        <button onClick={() => this.toggleState()}>
          {this.state.collapsed ? 'Open' : 'Close'}
        </button>
      </div>
    )
  }
}

const collapseContext = createContext({
  collapsed: false,
  toggleState: () => {},
})

function Button() {
  const { toggleState, collapsed } = useContext(collapseContext)
  return (
    <button onClick={() => toggleState()}>
      {collapsed ? 'Open' : 'Close'}
    </button>
  )
}

function CollapsibleDiv() {
  const { collapsed } = useContext(collapseContext)
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

export default function CollapseComponent() {
  const [collapsed, setCollapsed] = useState(false)
  function toggleState() {
    setCollapsed(!collapsed)
  }
  return (
    <collapseContext.Provider
      value={{
        collapsed,
        toggleState,
      }}
    >
      <CollapsibleDiv />
      <Button />
    </collapseContext.Provider>
  )
}
