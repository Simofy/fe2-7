import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App name="password" type="1" />
  </React.StrictMode>,
  document.getElementById('root')
)

// React.Component.prototype.componentDidUpdate = function() {
//   console.log(this.constructor.name)
// }
