import React, { useCallback, useState } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css'
import AppContext from './AppContext'
import Lesson10 from './lesson-10'
import TableNew from './lesson-10/TableNew'
import Lesson11 from './lesson-11'
import TableLesson11 from './lesson-11/Table'
import Lesson13 from './lesson-13'
import Lesson14 from './lesson-14'
import Task1 from './lesson-14/Task1'
import Task2 from './lesson-14/Task2'
import Task3 from './lesson-14/Task3'
import Task4 from './lesson-14/Task4'
import Task5 from './lesson-14/Task5'
import Task6 from './lesson-14/Task6'
import Task7 from './lesson-14/Task7'
import Task10 from './lesson-15/task10'
import Task8 from './lesson-15/Task8'
import Lesson2 from './lesson-2'
import CollapseComponent from './lesson-3/Collapse'
import Lesson4 from './lesson-4'
import Lesson5 from './lesson-5'
import Lesson7 from './lesson-7'
import Lesson8 from './lesson-8'
import Lesson9 from './lesson-9'
import ThirdPart from './lesson-9/ThirdPart'
import routes from './routes'

const lessonComponents = {
  [`${routes.lesson15}/task-10`]: Task10,
  [`${routes.lesson15}/task-8`]: Task8,
  [`${routes.lesson14}/task-7`]: Task7,
  [`${routes.lesson14}/task-6`]: Task6,
  [`${routes.lesson14}/task-5`]: Task5,
  [`${routes.lesson14}/task-4`]: Task4,
  [`${routes.lesson14}/task-3`]: Task3,
  [`${routes.lesson14}/task-2`]: Task2,
  [`${routes.lesson14}/task-1`]: Task1,
  [routes.lesson14]: Lesson14,
  [routes.lesson1]: TableNew,
  [routes.lesson2]: Lesson2,
  [routes.lesson4]: Lesson4,
  [routes.lesson5]: Lesson5,
  [routes.lesson7]: Lesson7,
  [routes.lesson8]: Lesson8,
  [routes.lesson9]: Lesson9,
  ['/lesson-9/second-part']: ThirdPart,
  [routes.lesson10]: Lesson10,
  [routes.lesson11]: Lesson11,
  [routes.lesson13]: Lesson13,
  [routes.lesson11Table]: TableLesson11,
  ['/collapse']: CollapseComponent,
}

const testArray = []

for (let i = 0; i < 5; i += 1) {
  testArray.push(Math.random())
}

function expensiveCalculation(array) {
  let total = 0
  array.forEach((value) => {
    console.log(value)
    return (total += value)
  })
  return Math.round(total)
}

function AppComponent() {
  const [variable, setVariable] = useState(() =>
    expensiveCalculation(testArray)
  )
  const [variableTest, setVariableTest] = useState(0)

  const testCallback = useCallback(() => {
    return variable
  }, [variableTest])

  return (
    // <Task2 />
    <AppContext.Provider
      value={{
        increment: variable,
        user: {},
        setVariable,
      }}
    >
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <div className="container">
              <Switch>
                {Object.entries(lessonComponents).map(([route, component]) => (
                  <Route key={route} path={route} component={component} />
                ))}
                <Route path="/" exact>
                  <h2>Landing page</h2>
                </Route>
                <Route path="/">
                  <h2>Page not found</h2>
                </Route>
              </Switch>
            </div>
            <button
              type="button"
              onClick={() => {
                console.log(testCallback())
                setVariable(variable + 1)
              }}
            >
              Change state {variable}
            </button>
            <button
              type="button"
              onClick={() => {
                setVariableTest(variableTest + 1)
              }}
            >
              <span>Change test state {variableTest}</span>
            </button>
            <Link to="/">home</Link>
            {Object.keys(lessonComponents).map((route) => (
              <Link key={route} to={route}>
                {route}
              </Link>
            ))}
          </header>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default AppComponent
