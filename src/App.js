import React, { Component } from "react";
import Board from "./Board";
import Cell from "./Cell";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className='App flex'>
        <Board />
      </div>
    );
  }
}

export default App;
