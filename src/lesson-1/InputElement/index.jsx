









import React from "react";
import TextElement from "./TextElement";

export default class InputElement extends React.Component {
  constructor(props) {
    super(props);
    const { placeholder } = this.props;
    console.log(placeholder);
  }
  render() {
    const { placeholder } = this.props;
    return (
      <form>
        <TextElement name="hello" />
        <input name="test" type="text" placeholder={placeholder} />
      </form>
    );
  }
}
