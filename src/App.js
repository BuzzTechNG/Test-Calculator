import React, { Component } from "react";
import "./App.css";

import Caculation from "./Calculation/Calculation";

class App extends Component {
  render() {
    // let addedValue = +this.state.number1 + +this.state.number2;
    return (
      <div className="App">
        <Caculation />
      </div>
    );
  }
}

export default App;
