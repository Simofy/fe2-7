import React from "react";

export default class List extends React.Component {
  state = {
    list: [],
    listValue: "",
  };
  toggleState() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const {
            target: {
              listValue: { value: listValue },
              listValue1: { value: listValue1 },
              listValue2: { value: listValue2 },
            },
          } = e;

          // const listValue = e.target.listValue.value;
          

          console.log(listValue, listValue1, listValue2);
          this.setState({
            list: [...this.state.list, listValue],
          });
        }}
      >
        <input name="listValue" />
        <input name="listValue1" />
        <input name="listValue2" />
        <button type="submit">Add</button>
        {this.state.list.map((item) => (
          <div>{item}</div>
        ))}
      </form>
    );
  }
}
