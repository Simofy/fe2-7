import React from "react";
import data1 from "./data1.json";

export class SlangOther extends React.Component {
  render() {
    // console.log(this.props);
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
    // console.log(test);

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

class ListItem extends React.Component {
  render() {
    const { name, price } = this.props;
    return (
      <div>
        <strong>{name}</strong>
        <span>{price.toFixed(2)}$</span>
      </div>
    );
  }
}

export default class Lesson2 extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    fetch("https://simutis.dev/api/generate-shopping-cart?limit=10")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          data,
        })
      );
  }
  render() {
    const { data } = this.state;
    console.log("Lesson2 Component", data);
    const dummyArray = [10, 11, 1, 5, 6];
    if (!Array.isArray(dummyArray)) {
      return null;
    }
    return (
      <>
        {data.map(({ name, price, id }) => (
          <ListItem key={id} name={name} price={price} />
        ))}
        {/* <Slang
          data={data1}
          testing
          dummyArray={dummyArray}
          test={1}
          test2="alio"
        /> */}
      </>
      // <div>{this.props.show ? "Show" : <Loading show={dummyArray} />}</div>
    );
  }
}
