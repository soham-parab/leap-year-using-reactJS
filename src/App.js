import "./styles.css";

import React, { useState } from "react";

var color = "red";

export default function App() {
  var [leapYearOrNo, setleapYearOrNo] = useState("");

  function enterBirthYear(event) {
    var inputYear = event.target.value;

    if ([inputYear % 4] == 0) {
      leapYearOrNo = "You were born in a leap year!";
    } else {
      leapYearOrNo = "You were not born in a leap year.";
    }
  }

  function clickHandler() {
    setleapYearOrNo(leapYearOrNo);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>
        Welcome!
        <p>Find out if you were born in a leap year!</p>
      </h1>

      <p> Enter your birth year here:</p>
      <input onChange={enterBirthYear} />
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
        Find out
      </button>
      <h2>{leapYearOrNo}</h2>
    </div>
  );
}
