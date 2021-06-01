import React from "react";
import "./App.css";
import Lesson2, { Loading } from "./lesson-2";

class App extends React.Component {
  state = {
    variable: 0,
  };
  constructor(props) {
    super(props);
    //
  }
  render() {
    console.log('App component', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <Lesson2 show={this.state.variable % 2}/>
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
