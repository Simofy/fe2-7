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
import Lesson9 from "./lesson-9";
import SecondPart from "./lesson-9/SecondPart";
import { routes } from "./routes";

// import RandomNameGenerator from "./RandomNameGenerator";

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
              <Route path="/lesson-9/second-part">
                <SecondPart />
              </Route>
              <Route path={routes.lesson2}>
                <Lesson2 />
              </Route>
              <Route path={routes.lesson9}>
                <Lesson9 />
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
          <Link to={routes.lesson9}>lesson 9</Link>
          <Link to={`/lesson-9/second-part`}>lesson 9 Use effect</Link>
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

// const data = [
//   [3, 9, 25, 9, 40, 19, 45, 20, 0],
//   [6, 8, 30, 8, 48, 0, 0, 0, 0],
//   [7, 9, 18, 9, 38, 18, 52, 19, 11],
//   [10, 8, 48, 9, 3, 18, 45, 19, 0],
//   [15, 8, 52, 9, 11, 17, 58, 18, 18],
//   [30, 0, 0, 0, 0, 19, 2, 19, 20],
// ];

// useEffect(() => {
//   let smallestTime = Infinity;
//   let days = [];
//   for (let i = 0; i < data.length; i += 1) {
//     const [day, ...times] = data[i];
//     let totalTime = 0;
//     let hasBothTimes = true;
//     for (let k = 0; k < times.length; k += 4) {
//       const a1 = times[k];
//       const a2 = times[k + 1];
//       const b1 = times[k + 2];
//       const b2 = times[k + 3];
//       const toAdd = b1 * 60 + b2 - (a1 * 60 + a2);
//       if (toAdd === 0) {
//         hasBothTimes = false;
//         continue;
//       }
//       totalTime += toAdd;
//     }
//     if (totalTime === 0 || !hasBothTimes) continue;
//     if (smallestTime === totalTime) {
//       days.push(day);
//       continue;
//     }
//     if (smallestTime < totalTime) {
//       continue;
//     }
//     if (smallestTime > totalTime) {
//       smallestTime = totalTime;
//       days = [day];
//       continue;
//     }
//   }
//   console.log(`
//   Minimalus laikas\n
//   ${smallestTime}\n
//   Dienos\n
//   ${days.join(" ")}
//   `);
// }, []);
