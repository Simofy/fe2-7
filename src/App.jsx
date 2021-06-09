import React, { useState } from "react";
import "./App.css";
import Test1 from "./lesson-1/Test1";
import Lesson4, { ColorChanger } from "./lesson-4";
import Lesson5 from "./lesson-5";
import FirstPropElement from "./lesson-5/homework/props/_1";
import SecondPropElement from "./lesson-5/homework/props/_2";
import FormComponents from "./lesson-6";
import Game from "./lesson-6/Game";
import Animation from "./lesson-6/Animation";
import CollapseComponent from "./lesson-3/Collapse";
import Lesson7 from "./lesson-7";
// import RandomNameGenerator from "./RandomNameGenerator";

function AppComponent() {
  const [variable, setVariable] = useState('00000000');
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {/* <FormComponents /> */}
          {/* <SecondPropElement propValue={this.state.variable}  /> */}
          <Lesson7 incrementFunction={setVariable} depth={1} />
          {/* <CollapseComponent /> */}
          {/* <Animation /> */}
        </div>
        <button
          type="button"
          onClick={() => {
            setVariable(variable + 1);
          }}
        >
          Change state {variable}
        </button>
      </header>
    </div>
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
