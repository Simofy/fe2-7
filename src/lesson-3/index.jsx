import React from "react";
import Collapse from "./Collapse";
import List from "./List";

export default class SumComponent extends React.Component {
  // shouldComponentUpdate(newProps, newState) {
  //   console.log(newProps, this.props);
  //   return false;
  // }
  // constructor() {
  //   this.c = 100
  //   this.a = () => 'test'
  // }
  state = {
    increment: 0,
  };
  constructor(props) {
    super(props);
    this.calculateRandomNumber = this.calculateRandomNumber.bind(this);
  }
  seed = 10;
  calculateRandomNumber() {
    console.log(Math.random() * this.seed);
    // this.state.increment += 1;
    this.setState({
      increment: this.state.increment + 1
    })
    console.log(this.state.increment);
  }
  componentDidMount() {
    // const test = {
    //   seed: 55,
    // };
    // setTimeout(this.calculateRandomNumber, 1000);
  }
  render() {
    // console.log(this.props.children)
    return (
      // <button onClick={this.calculateRandomNumber}>
      //   {this.state.increment}
      // </button>
      <List />
    );
  }
}



function SumComponent1(props) {
  this.props = props;
  this.state = {
    asdas: 10
  }
}

SumComponent1.prototype.render = () => {
  console.log(this)
  // return (
  //   // <button onClick={this.calculateRandomNumber}>
  //   //   {this.state.increment}
  //   // </button>
  //   // <List />
  // );
}

const a = new SumComponent1({
  variable1: 10,
  variable2: 10
})


a.render()







function test(props) {
  console.log(this);
}

const testObj = {
  a: "alio",
};

const newTest = test.bind(testObj);

newTest();
// test.prototype.test1 = function () {
//   return this.c * 10
// }

test.prototype.render = function () {
  return this.props.c * 10;
};

// const obj = {
//   c: 100,
//   a:  () => 'test',
//   d: {
//     test: 'alio'
//   },
//   test1() {
//     return this.c * 10
//   }
// }

// obj.c *= 100
// obj.d.test = 'valio'
// const a = {
//   ...obj,
// }
