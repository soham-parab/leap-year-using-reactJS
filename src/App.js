import "./styles.css";

import React, { useState } from "react";

var color = "red";

export default function App() {
  function clickHandler() {
    var inputYear = event.target.value;
    console.log(inputYear);

    // if ([inputYear % 4] === 0){
    //   var result = console.log("Leap year")

    // }
    // else {
    //   var result = console.log("Not leap year")

    // }
    // return result
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>
        Welcome!
        <p>Find out if you were born in a leap year!</p>
      </h1>

      <p> Enter your birth year here:</p>
      <input onChange={clickHandler} />
      <button
        onClick={clickHandler}
        style={{
          position: "relative",
          padding: "0.2rem",
          top: "2vh",
          display: "block",
          margin: "auto"
        }}
      >
        Find out.
      </button>
    </div>
  );
}
