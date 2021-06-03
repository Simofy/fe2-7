import React from "react";

// export default class Lesson4 extends React.Component {
//   state = {
//     list: [],
//     value: "",
//     largeData: [],
//   };
//   constructor(props) {
//     super(props);
//     const largeData = [];
//     for (let i = 0; i < 20000; i += 1) {
//       largeData.push(i + "asdasd");
//     }
//     this.state.largeData = largeData;
//   }
//   listTo = [];
//   addToList() {
//     // console.log(this.state.value);
//     // a.push(this.state.value);
//     this.setState((state, props) => ({
//       list: [...state.list, state.value],
//     }));
//   }
//   removeFromList(index) {
//     // console.log(this.state.value);
//     // a.push(this.state.value);
//     this.setState((state, props) => {
//       state.list.splice(index, 1);
//       return { list: [...state.list] };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <button
//           onClick={() => {
//             this.addToList();
//           }}
//         >
//           Click me
//         </button>
//         <input
//           style={{
//             position: "fixed",
//             top: 0,
//           }}
//           placeholder={this.state.placeholder}
//           value={this.state.value}
//           onChange={(e) => {
//             this.setState({
//               value: e.target.value,
//             });
//           }}
//         />
//         {this.props.variable}
//         {this.state.list.map((item, index) => (
//           <div onClick={() => this.removeFromList(index)}>{item}</div>
//         ))}
//       </div>
//     );
//   }
// }

export default class Lesson4 extends React.Component {
  state = {
    colorIndex: 0,
  };
  colors = ["red", "green", "blue"];
  constructor(props) {
    super(props);
    this.state.randomListNew = props.randomList;
    // this.state = {};
    // this.buttonRef = React.createRef();
  }
  // componentDidMount() {
  //   console.log(this.buttonRef.current);
  //   this.buttonRef.current.addEventListener("click", function Lesson4OnClick() {
  //     throw new Error("Error at button click");
  //   });
  // }
  render() {
    return (
      <div>
        <button
          // ref={this.buttonRef}
          onClick={() => {
            this.setState({
              colorIndex: (this.state.colorIndex + 1) % 3,
            });
          }}
        >
          Click me
        </button>
        <div
          style={{
            width: "100px",
            height: "100px",
            background: this.colors[this.state.colorIndex],
          }}
        >
          {this.props.variable}
        </div>
      </div>
    );
  }
}

export class ColorChanger extends React.Component {
  state = {
    colorIndex: 0,
    colorList: [],
  };
  constructor(props) {
    super(props);
    const colorList = [];
    for (let i = 0; i < props.colorCount; i += 1) {
      colorList.push("#" + (((1 << 24) * Math.random()) | 0).toString(16));
    }
    this.state.colorList = colorList;
    // props.colorCount;
  }
  render() {
    console.log(this.state.colorIndex)
    return (
      <div>
        <button
          // ref={this.buttonRef}
          onClick={() => {
            this.setState({
              colorIndex: this.state.colorIndex + 1,
            });
          }}
        >
          Click me
        </button>
        <div
          style={{
            width: "100px",
            height: "100px",
            background:
              this.state.colorList[
                this.state.colorIndex % this.state.colorList.length
              ],
          }}
        ></div>
      </div>
    );
  }
}
