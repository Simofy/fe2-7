import React from "react";
import "./App.css";
import Test1 from "./lesson-1/Test1";
import Lesson4, { ColorChanger } from "./lesson-4";
import Lesson5 from "./lesson-5";
import FirstPropElement from "./lesson-5/homework/props/_1";
import SecondPropElement from "./lesson-5/homework/props/_2";
import FormComponents from "./lesson-6";
// import RandomNameGenerator from "./RandomNameGenerator";

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
            {/* <Lesson5 /> */}
            {/* <SecondPropElement propValue={this.state.variable}  /> */}
            <FormComponents />
          </div>
          <button
            type="button"
            onClick={() => {
              this.setState({
                variable: this.state.variable + 1,
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

export default App;
