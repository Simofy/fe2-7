







import React from "react";

export default class Test1 extends React.Component {
  render() {
    const { nameValue } = this.props;
    return <div test={nameValue}>{nameValue}</div>;
  }
}
