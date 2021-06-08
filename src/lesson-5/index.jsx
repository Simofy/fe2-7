import React from "react";

/**
 * @param {bool} action
 * @description if true then add to cart
 * @returns
 */
function Item({ id, name, price, onClick, action }) {
  return (
    <div>
      {name}-{price}
      <button onClick={() => onClick(id)}>{action ? "Add" : "Remove"}</button>
    </div>
  );
}

export default class Lesson5 extends React.Component {
  state = {
    data: [],
    cart: [],
  };
  constructor(props) {
    super(props);
    fetch("https://simutis.dev/api/generate-shopping-cart?limit=10")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }
  onAddPress(id) {
    const item = this.state.data.find(({ id: dataId }) => dataId === id);
    if (item) {
      console.log(item);
      this.setState({
        cart: [...this.state.cart, item],
      });
    }
  }
  onRemovePress(id) {
    const itemIndex = this.state.cart.findIndex(
      ({ id: dataId }) => dataId === id
    );
    if (itemIndex !== -1) {
      this.state.cart.splice(itemIndex, 1);
      this.setState({
        cart: [...this.state.cart],
      });
    }
  }
  render() {
    const test1 = "valio";
    const test = { asd: 1, valio: "test", ...test1 };
    console.log(test)
    let totalPrice = 0;
    const cartDisplay = this.state.cart.map((item) => {
      totalPrice += item.price;
      return (
        <Item key={item.id} {...item} onClick={this.onRemovePress.bind(this)} />
      );
    });
    return (
      <div>
        {this.state.data.map((item) => (
          <Item {...item} onClick={this.onAddPress.bind(this)} action />
        ))}
        {this.state.id}
        <div className="cart-element">
          <h3>Cart</h3>
          <h4>{totalPrice}</h4>
          {cartDisplay}
        </div>
      </div>
    );
  }
}
