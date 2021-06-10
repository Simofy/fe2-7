import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import Test1 from "./lesson-1/Test1";
import Lesson2 from "./lesson-2";
import List from "./lesson-3/List";
import Lesson4, { ColorChanger } from "./lesson-4";
import Lesson5 from "./lesson-5";
import FirstPropElement from "./lesson-5/homework/props/_1";
import SecondPropElement from "./lesson-5/homework/props/_2";
import FormComponents from "./lesson-6";
import Game from "./lesson-6/Game";
import Animation from "./lesson-6/Animation";
import CollapseComponent from "./lesson-3/Collapse";
import Lesson7 from "./lesson-7";
import Task1 from "./lesson-7/Task1";
import Lesson8 from "./lesson-8";
import BinaryIncrement from "./lesson-8/BinaryIncrement";

// import RandomNameGenerator from "./RandomNameGenerator";

const routes = {
  lesson1: "/lesson-1",
  lesson2: "/lesson-2",
};

const PrivateRouter = () => {
  const { user } = useContext();
  if (!user) return <Redirect to="/login" />;
  return (
    <Route path={routes.lesson1}>
      <Test1 />
    </Route>
  );
};

function AppComponent() {
  const [variable, setVariable] = useState(0);
  const [variableTest, setVariableTest] = useState(0);
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div className="container">
            {/* <FormComponents /> */}
            {/* <SecondPropElement propValue={this.state.variable}  /> */}
            {/* <CollapseComponent incrementFunction={setVariable} depth={1} /> */}
            {/* <CustomButton onClick={} />
          <Collapse open={}/> */}
            {/* <Task1 /> */}
            {/* <CollapseComponent /> */}
            {/* <Animation /> */}
            {/* <Lesson8 count={variable} /> */}
            {/* <BinaryIncrement />
             */}
            <Switch>
              <Route path={routes.lesson1}>
                <BinaryIncrement />
              </Route>
              <Route path={routes.lesson2}>
                <Lesson2 />
              </Route>
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
              setVariable(variable + 1);
            }}
          >
            Change state {variable}
          </button>
          <button
            type="button"
            onClick={() => {
              setVariableTest(variableTest + 1);
            }}
          >
            Change test state {variableTest}
          </button>
          <Link to="/">home</Link>
          <Link to={routes.lesson1}>lesson 1</Link>
        </header>
      </div>
    </BrowserRouter>
  );
}

class App extends React.Component {
  state = {
    variable: 0,
    obj: {
      test1: 1,
    },
  };
  render() {
    // console.log('App component', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            {/* <FormComponents /> */}
            {/* <SecondPropElement propValue={this.state.variable}  /> */}
            <Lesson7 />
            {/* <CollapseComponent /> */}
            {/* <Animation /> */}
          </div>
          <button
            type="button"
            onClick={() => {
              this.setState({
                variable: 10,
              });
            }}
          >
            Change state {this.state.variable}
          </button>
        </header>
      </div>
    );
  }
}

export default AppComponent;

// const data = [
//   [222, 6, 30, 7, 1]
//   // [121, 6, 15, 7, 25],
//   // [102, 7, 1, 8, 14],
//   // [236, 6, 30, 8, 31],
//   // [141, 7, 31, 8, 10],
//   // [111, 7, 1, 7, 20],
//   // [128, 6, 2, 6, 3],
// ];

// useEffect(() => {
//   const n = data.length;
//   let finalStartDate = [0, 0];
//   let finalEndDate = [0, 0];
//   let finalStart = 0;
//   let finalEnd = Infinity;
//   let finalFlowers = [];
//   for (let i = 0; i < n; i += 1) {
//     const [id, monthStart, dayStart] = data[i];
//     const start = monthStart * 100 + dayStart;
//     const flowers = [];
//     flowers.push(data[i]);
//     for (let k = 0; k < n; k += 1) {
//       const [
//         idOther,
//         monthStartOther,
//         dayStartOther,
//         monthEndOther,
//         dayEndOther,
//       ] = data[k];
//       const startOther = monthStartOther * 100 + dayStartOther;
//       const endOther = monthEndOther * 100 + dayEndOther;
//       if (id !== idOther) {
//         if (startOther <= start && start <= endOther) {
//           flowers.push(data[k]);
//         }
//       }
//     }
//     if (finalFlowers.length < flowers.length) {
//       finalFlowers = flowers;
//     }
//   }
//   for (let i = 0; i < finalFlowers.length; i += 1) {
//     const [, monthStart, dayStart, monthEnd, dayEnd] = finalFlowers[i];
//     const start = monthStart * 100 + dayStart;
//     const end = monthEnd * 100 + dayEnd;
//     if (finalStart < start) {
//       finalStart = start;
//       finalStartDate = [monthStart, dayStart];
//     }
//     if (finalEnd > end) {
//       finalEnd = end;
//       finalEndDate = [monthEnd, dayEnd];
//     }
//   }
//   console.log(`
//     Total: ${finalFlowers.length},\n
//     Start date: ${finalStartDate[0]} ${finalStartDate[1]},\n
//     End date: ${finalEndDate[0]} ${finalEndDate[1]},\n
//   `);
// }, []);
