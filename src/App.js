import React, { component, Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    number1: 0,
    number2: 0,
  };

  inputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    let addedValue = +this.state.number1 + +this.state.number2;
    return (
      <div>
        <input
          type="number"
          name="number1"
          value={this.state.number1}
          onChange={this.inputHandler}
        />
        <input
          type="number"
          name="number2"
          value={this.state.number2}
          onChange={this.inputHandler}
        />
        <p>The addition is {addedValue}</p>
      </div>
    );
  }
}

export default App;
