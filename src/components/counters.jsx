import React, { Component } from "react";
import Counter from "./counter";

// A counter that has a three buttons (reset, delete all, add counter) and
// a list of counters based on the array in the app class.
class Counters extends Component {
  render() {
    // We can use object destructuring to get rid of the this.props. in front of
    // onRest, onDelete, and onIncrement in the return code.
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
      onAdd,
      onDeleteAll
    } = this.props;

    return (
      <div>
        {/* Adds the Reset button */}
        <button onClick={onReset} className="btn btn-primary btn-md m-2">
          Reset
        </button>

        {/* Adds the Delete all button */}
        <button onClick={onDeleteAll} className="btn btn-danger btn-md m-2">
          Delete All
        </button>

        {/* adds a list of counters */}
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          >
            {/*
             This can be done to pass as a children component
             <h4>Counter #{counter.id}</h4> 
             */}
          </Counter>
        ))}

        {/* Adds the add counter button */}
        <button onClick={onAdd} className="btn btn-primary btn-md m-2">
          Add Counter
        </button>
      </div>
    );
  }
}

export default Counters;
