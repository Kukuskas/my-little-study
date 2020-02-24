import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  incrEvent = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  decrEvent = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value > 0
      ? counters[index].value--
      : console.log("minimum");

    this.setState({ counters });
  };
  deleteEvent = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  resetEvent = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  addEvent = state => {
    const counters = [...this.state.counters];
    const count = [...this.state.counters];
    let number = 0;
    number = oneAndTwo();
    counters.push({
      id: number,
      value: 0
    });
    // }
    function oneAndTwo() {
      return (number =
        count.length == 0 ? 1 : counters.length == 1 ? 2 : regFunc(0));
      function regFunc(i) {
        count.sort((a, b) => {
          return a.id - b.id;
        });
        number =
          count[0].id !== 1
            ? 1
            : count[i].id + 1 !== count[i + 1].id
            ? count[i].id + 1
            : count.length == count[i + 1].id
            ? count[i + 1].id + 1
            : number;
        return number !== 0 ? number : regFunc(i + 1);
      }
    }

    this.setState({ counters });
  };
  sortEvent = state => {
    const counters = [...this.state.counters];
    counters.sort((a, b) => {
      return a.id - b.id;
    });
    this.setState({ counters });
  };
  sortValueEvent = state => {
    const counters = [...this.state.counters];
    counters.sort((a, b) => {
      return b.value - a.value;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          totalCountersId={this.state.counters.reduce((a, b) => a + b.value, 0)}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.incrEvent}
            onDecrement={this.decrEvent}
            onDelete={this.deleteEvent}
            onReset={this.resetEvent}
            onAdd={this.addEvent}
            onSort={this.sortEvent}
            onSortValue={this.sortValueEvent}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
