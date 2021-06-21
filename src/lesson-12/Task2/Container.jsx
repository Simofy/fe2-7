import { useContext } from 'react'
import ThemeContext from './ThemeContext'

export default function Container() {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      style={{
        ...theme,
      }}
    >
      <h3>Test</h3>
      <p>Hello</p>
    </div>
  )
}
