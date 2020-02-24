import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onAdd,
      onDecrement,
      onSort,
      onSortValue
    } = this.props;
    return (
      <div>
        <span>Seřadit podle:</span>
        <button onClick={onSort} className="btn btn-primary btn-sm m-2">
          Číslo položky
        </button>
        <button onClick={onSortValue} className="btn btn-primary btn-sm m-2">
          Počet kusů
        </button>
        <br />
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <button onClick={onAdd} className="btn btn-primary btn-sm m-2">
          Add
        </button>
        <br />

        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
