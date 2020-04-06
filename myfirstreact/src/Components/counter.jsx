import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    // imageUrl: "https://picsum.photos/200"
  };
  //   incrEvent=() =>{
  //   this.setState({value: this.state.value +1});
  // }
  render() {
    return (
      <div className="row">
        <span style={{ width: 95, marginTop: 8 }}>
          Položka č.{this.props.counter.id}
        </span>

        <div style={{ textAlign: "center", width: 42, marginTop: 8 }}>
          <span className={this.zeroWarning()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary btn-sm "
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={() => this.props.onDecrement(this.props.counter)}
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  zeroWarning() {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "None" : value;
  }
}

export default Counter;
