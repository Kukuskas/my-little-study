import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
    // imageUrl: "https://picsum.photos/200"
  };
  //   incrEvent=() =>{
  //   this.setState({value: this.state.value +1});
  // }
  render() {
    return (
      <div>
        <span>Položka č.{this.props.counter.id}</span>{/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={{ width: 70}} className={this.zeroWarning()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm" onClick={()=> this.props.onIncrement(this.props.counter)}>
          +
        </button>
        <button className="btn btn-secondary btn-sm m-2" onClick={() => this.props.onDecrement(this.props.counter)}>
          -
        </button>
        <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }

  zeroWarning() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const {value} = this.props.counter;
    return value === 0 ? "Prázdno" : value;
  }
}

export default Counter;
