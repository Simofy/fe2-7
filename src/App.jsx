import React from "react";
import "./App.css";
import Lesson2 from "./lesson-2";

class App extends React.Component {
  state = {
    variable: 0,
  };
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <div className="recursive-container">
            <Lesson2 />
          </div>
          <button
            type="button"
            onClick={() =>
              this.setState({
                variable: this.state.variable + 1,
              })
            }
          >
            Change state {this.state.variable}
          </button>
        </header>
      </div>
    );
  }
}

export default App;
