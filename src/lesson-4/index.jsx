import React from "react";

export default class Lesson4 extends React.Component {
  state = {
    list: [],
    value: "",
    largeData: [],
  };
  constructor(props) {
    super(props);
    const largeData = [];
    for (let i = 0; i < 20000; i += 1) {
      largeData.push(i + "asdasd");
    }
    this.state.largeData = largeData;
  }
  listTo = [];
  addToList() {
    // console.log(this.state.value);
    // a.push(this.state.value);
    this.setState((state, props) => ({
      list: [...state.list, state.value],
    }));
  }
  removeFromList(index) {
    // console.log(this.state.value);
    // a.push(this.state.value);
    this.setState((state, props) => {
      state.list.splice(index, 1);
      return { list: [...state.list] };
    });
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.addToList();
          }}
        >
          Click me
        </button>
        <input
          style={{
            position: "fixed",
            top: 0,
          }}
          placeholder={this.state.placeholder}
          value={this.state.value}
          onChange={(e) => {
            this.setState({
              value: e.target.value,
            });
          }}
        />
        {this.props.variable}
        {this.state.list.map((item, index) => (
          <div onClick={() => this.removeFromList(index)}>{item}</div>
        ))}
      </div>
    );
  }
}

// export default class Lesson4 extends React.Component {
//   state = {};
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.buttonRef = React.createRef()
//   }
//   componentDidMount() {
//     console.log(this.buttonRef.current)
//     this.buttonRef.current.addEventListener('click', function lesson4OnClick() {
//       throw new Error('Error at button click');
//     })
//   }
//   render() {
//     return (
//       <div>
//         <button
//           ref={this.buttonRef}
//           // onClick={() => {
//           //   throw new Error("Testing error");
//           // }}
//         >
//           Click me
//         </button>
//       </div>
//     );
//   }
// }
