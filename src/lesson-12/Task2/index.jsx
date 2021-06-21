import { useEffect, useState } from 'react'
import Container from './Container'
import ThemeContext from './ThemeContext'
import ThemeForm from './ThemeForm'
import './Task2Style.scss'

const defaultTheme = {
  color: 'black',
  fontSize: '14px',
  backgroundColor: 'white',
}

export default function Task2() {
  const [theme, setTheme] = useState(() => {
    try {
      const localTheme = localStorage.getItem('theme')
      if (localTheme) {
        return JSON.parse(localTheme)
      }
      return defaultTheme
    } catch (e) {
      return defaultTheme
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('theme', JSON.stringify(theme))
    } catch (e) {}
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        setTheme,
        theme,
      }}
    >
      <div className="task2-container">
        <ThemeForm />
        <Container />
      </div>
    </ThemeContext.Provider>
  )
}
