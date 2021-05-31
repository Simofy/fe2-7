import React from "react";

export default class Test2 extends React.Component {
  state = {
    show: false,
  };
  onClick(e) {
    const {
      target: { value: buttonValue },
    } = e;
    this.setState({
      show: !this.state.show,
    });
  }
  render() {
    const { nameValue } = this.props;
    // document
    // .getElementById()
    // .addEventListener('click', )
    console.log(this.state.show ? "Taip" : "Ne");
    return (
      <button 
      style={{
        background: 'red',
        'background-color': 'green',
        backgroundColor: this.state.show ?'blue' : '#faf',
      }}
      className="test test2"
      onClick={(e) => this.onClick(e)} type="button" value={nameValue}>
        {nameValue}
      </button>
    );
  }
}
