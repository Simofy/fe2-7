import { useContext, useRef } from 'react'
import ThemeContext from './ThemeContext'

const colorSelect = ['#dad', 'red', 'rgb(200, 200, 200)', 'magenta']

export default function ThemeForm() {
  const { setTheme, theme } = useContext(ThemeContext)
  const formElement = useRef(null)
  const handleThemeChange = () => {
    if (formElement.current) {
      const {
        ['color']: { value: color },
        ['font-size']: { value: fontSize },
        ['background-color']: { value: backgroundColor },
      } = formElement.current
      setTheme((oldTheme) => ({
        ...oldTheme,
        color,
        fontSize: `${fontSize}px`,
        backgroundColor,
      }))
    }
  }
  return (
    <div>
      <form
        ref={formElement}
        id="test"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <select name="color" defaultValue={theme.color}>
          {colorSelect.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
        <input type="number" name="font-size" defaultValue={theme.fontSize} />
        <input
          type="color"
          name="background-color"
          defaultValue={theme.backgroundColor}
        />
      </form>
      <button type="button" onClick={handleThemeChange}>
        Change theme
      </button>
    </div>
  )
}
