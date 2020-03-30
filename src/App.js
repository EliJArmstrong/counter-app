import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

//      The top level component
//              App
//             /   \
//            /     \
//        NavBar   Counters
//                     \
//                   Counter
class App extends Component {
  state = {
    counters: []
  };

  /// --------------------------------------------------------------------------
  /// --------------------------------------------------------------------------
  /// --------------------------------------------------------------------------

  // This method will increment the given counter.
  // param counter: The counter object to increment.
  handleIncrement = counter => {
    //console.log(counter);

    /// The ... creates a copy of the this.state.counters array.
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    // Recalls the render method.
    this.setState({ counters });
    //console.log(this.state.counters[index]);
  };

  /// --------------------------------------------------------------------------
  /// --------------------------------------------------------------------------
  /// --------------------------------------------------------------------------

  // This method will decrement the given counter.
  // param counter: The counter object to decrement.
  // Note: will not let the counter go below 0 (zero)
  handleDecrement = counter => {
    if (counter.value > 0) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
  };

  /// --------------------------------------------------------------------------
  /// --------------------------------------------------------------------------
  /// --------------------------------------------------------------------------

  // When this method is called it will reset the value of all counters that are
  // created at the given time of the method call.
  handleReset = () => {
    const resetCounters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters: resetCounters });
  };

  /// --------------------------------------------------------------------------
  /// --------------------------------------------------------------------------
  /// --------------------------------------------------------------------------

  // When this method is called the counter with the given id will be deleted
  // from array.
  // param counterId: The id of the counter to be deleted.
  handleDelete = counterId => {
    // console.log("Event Handler Called", counterId);

    const newCounters = this.state.counters.filter(
      counter => counter.id !== counterId
    );

    this.setState({ counters: newCounters });
  };

  /// --------------------------------------------------------------------------
  /// --------------------------------------------------------------------------
  /// --------------------------------------------------------------------------

  // This method when called will add a new counters to the array.
  handleAdd = () => {
    const newCounters = [...this.state.counters];
    const newCounter = { id: newCounters.length + 1, value: 0 };
    newCounters.push(newCounter);

    this.setState({ counters: newCounters });
  };

  /// --------------------------------------------------------------------------
  /// --------------------------------------------------------------------------
  /// --------------------------------------------------------------------------

  // When this method is called this will delete the array of counters.
  handleDeleteAll = () => {
    const newCounters = [];
    this.setState({ counters: newCounters });
  };

  /// --------------------------------------------------------------------------
  /// --------------------------------------------------------------------------
  /// --------------------------------------------------------------------------

  // The objects to be shown to the user.
  render() {
    return (
      <React.Fragment>
        {/* The nav bar */}
        <NavBar
          totalCounters={
            this.state.counters.filter(counter => counter.value > 0).length
          }
          numberOfCounters={this.state.counters.length}
        />

        {/* The main container that show everything thats not the nav bar */}
        <main className="container float-left">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
            onDecrement={this.handleDecrement}
            onDeleteAll={this.handleDeleteAll}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
