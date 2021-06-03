import React from "react";
import "./App.css";
import Lesson4 from "./lesson-4";
// import RandomNameGenerator from "./RandomNameGenerator";

class App extends React.Component {
  state = {
    variable: 0,
    obj: {
      test1: 1,
    },
  };
  constructor(props) {
    super(props);
    //
  }
  render() {
    // console.log('App component', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <Lesson4 variable={this.state.variable} />
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
