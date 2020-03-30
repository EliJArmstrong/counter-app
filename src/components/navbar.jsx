import React from "react";

// note: using {} in the parameters makes it so one does not need to do
// something like props.totalCounters instead it will go right to totalCounters.
// The other way to do this is function NavBar(props){...} but then you need to
// do props.totalCounters in the span header.
function NavBar({ totalCounters, numberOfCounters }) {
  return (
    //   the nav bar
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="top">
        Navbar {/* Shows the total number counters that are not zero */}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
        {/*  Shows the user a message if there are not counters in the array */}
        <span className="m-2">
          {numberOfCounters <= 0 &&
            "Click the Add Counter button to get started"}
        </span>
      </a>
    </nav>
  );
}

export default NavBar;
