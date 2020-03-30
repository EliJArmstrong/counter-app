import React, { Component } from "react";

// A classes that renders a button and a "label" to display a count.
// This class has a increment, decrement, delete button.

class Counter extends Component {
  // This is what is rendered from this class.
  render() {
    console.log("props: ", this.props);

    return (
      <div>
        {/* 
        This would render any children components. 
        {this.props.children} 
        */}
        <span className={this.getBadgeClasses()}>
          <h5>{this.formatCount()}</h5>
        </span>

        {/* This is the increment button */}
        <button
          // onClick needs to be passed a function reference.
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-md"
        >
          Increment
        </button>

        {/* This is the decrement button */}
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-warning btn-md m-2"
        >
          Decrement
        </button>

        {/* This is the delete button */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-md m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------

  // This function checks to see if the count is equal to zero.
  // if so then the string warning (yellow color) is appended to the classes
  // variable else the string primary (blue color) is attached to the end of
  // the string classes.
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------

  // This method checks the count variable and returns Zero as a string
  // if the count is equal to 0 else the method returns the number the
  // count variable.
  formatCount() {
    // This grabs the value prop from the state of the counter class.
    // I believe this is the same as below:
    // const value = this.props.counter.value;
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------

  // A style that will set a html/cs style to be of font size of 20 and
  // fontWeight to bold.
  style = {
    fontSize: 20,
    fontWeight: "bold"
  };
}

export default Counter;

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// Tags are no longer used.
// renderTags() {
//   var returnVar;
//   if (this.state.tags.length === 0) {
//     returnVar = <p>There are no tags!</p>;
//   } else {
//     /*</ul> This gets the tags array from the state object from above.
//         Then places each index or element in the array into the <li> of
//         the HTML style language. The wants to be unique in this case the
//         tag is unique and we used this.
//     */
//     returnVar = (
//       <ul>
//         {this.state.tags.map(tag => (
//           <li key={tag}>{tag}</li>
//         ))}
//       </ul>
//     );
//   }

//   return returnVar;
// }

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// we ended up using arrow function to bind the this component.
// constructor() {
//   super();
//   // This bit of code gives the ability to use this to the handel method.
//   // handle methods need to be binned to the this object.
//   this.handleIncrement = this.handleIncrement.bind(this);
// }

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// Note: the method was replaced with an inline function.
// This is so we can pass arguments
// doHandleIncrement = () => {
//   this.handleIncrement({ id: 1 });
// };

/// Notes:

/* Shows a button and how to change the color of the button base on a 
     condition
     <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
     <button className="btn btn-secondary btn-sm">Increment</button> */

// Note: It is possible to create objects for styles as well. ie:
// <span style={{ fontSize: 30 }} className="badge badge-primary m-2"></div>
// This is an object style:
// <span style={this.style} className="badge badge-primary m-2">
// className holds some bootstrap elements for style.

// imageUrl: "https://picsum.photos/200", // this get a random image.

// Something else to note:
/* address: {
    street: ''
    zip: ''
   } */

/* When there is a string (or a number) in a bool expression and if all
   expression in the statement is true the expression will return the value
   found at the every end of the expression (far right expression) }
   {this.state.tags.length === 0 && "Please create a new tag!"} */

// state = {
//   value: this.props.counter.value
// };

// The arrow function get the handle function the this component. This is done
// by when a function uses the arrow => it inherited the "this" component from
// the class. Normal method looks like handleIncrement() { ... } and the bind
// will happen in the constructor.
// handleIncrement = product => {
//   // console.log("Increment Clicked", this.state.count);
//   console.log(product);

//   // The set states is doing "this.state.value++;" but then updating the web
//   // page
//   this.setState({ value: this.state.value + 1 });
// };

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
