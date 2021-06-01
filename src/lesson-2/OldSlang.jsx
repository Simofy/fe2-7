import React from "react";
import data1 from "./data1.json";

export class SlangOther extends React.Component {
  render() {
    console.log(this.props)
    return this.props.other.join(", ");
  }
}

export class Slang extends React.Component {
  render() {
    const {
      dummyArray, //: [desimt, desimtPliusVienas],
      data: { definition, name },
      ...otherProps
    } = this.props;

    const [desimt, desimtPliusVienas, ...other] = dummyArray;
    const array = ["etst", "test", ...other];

    const namas = "Taip";

    const test = {
      ...otherProps,
      alio: "valio",
      ir: "internetas",
      test2: false,
      namas,
    };
    console.log(test);

    return (
      <div>
        <span>Name: {name}</span>
        <br />
        <div>{desimt}</div>
        <div>{desimtPliusVienas}</div>
        <div>
          <SlangOther {...test} other={other} />
        </div>
        <span>Definition: {definition}</span>
      </div>
    );
  }
}

export default class Lesson2 extends React.Component {
  render() {
    const dummyArray = [10, 11, 1, 5, 6];
    if (!Array.isArray(dummyArray)) {
      return null;
    }
    const testing = '12345';
    return (
      <>
        <Slang data={data1} testing dummyArray={dummyArray} test={1} test2="alio" />
      </>
      // <div>{this.props.show ? "Show" : <Loading show={dummyArray} />}</div>
    );
  }
}
