import React, { useState } from 'react'

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

export default function CollapseComponent() {
  const [collapsed, setCollapsed] = useState(false)
  function toggleState() {
    setCollapsed(!collapsed)
  }
  return (
    <div
      style={{
        width: '200px',
        height: collapsed ? '0px' : '200px',
        background: '#faf',
        transition: 'height 200ms',
      }}
    >
      <div></div>
      <button onClick={() => toggleState()}>
        {collapsed ? 'Open' : 'Close'}
      </button>
    </div>
  )
}
