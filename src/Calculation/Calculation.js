import React, { Component } from "react";
import "./Calculation.css";

import Calculationsign from "../CalculationSigns/Calculationsign";
import Input from "../Input/Input";

class Calculation extends Component {
  constructor() {
    super();
    this.state = {
      firstNumber: null,
      secondNumber: null,
      result: 0,
    };
  }

  inputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  calculateHandler = (action) => {
    switch (action) {
      case "Add":
        let add = +this.state.firstNumber + +this.state.secondNumber;
        this.setState({
          result: add,
        });
        break;
      case "Sub":
        let sub = +this.state.firstNumber - +this.state.secondNumber;
        this.setState({
          result: sub,
        });
        break;
      case "Div":
        let div = +this.state.firstNumber / +this.state.secondNumber;
        this.setState({
          result: div.toFixed(2),
        });
        break;
      case "Mul":
        let mul = +this.state.firstNumber * +this.state.secondNumber;
        this.setState({
          result: mul,
        });
        break;
      default:
    }
  };

  render() {
    return (
      <div>
        <div className="result"> Result: {this.state.result}</div>
        <Input
          name="firstNumber"
          value={this.state.firstNumber}
          onChange={this.inputHandler}
        />
        <Input
          name="secondNumber"
          value={this.state.secondNumber}
          onChange={this.inputHandler}
        />
        <Calculationsign
          label="Addition"
          calculate={() => this.calculateHandler("Add")}
        />
        <Calculationsign
          label="Subtraction"
          calculate={() => this.calculateHandler("Sub")}
        />
        <Calculationsign
          label="Division"
          calculate={() => this.calculateHandler("Div")}
        />
        <Calculationsign
          label="Multiplication"
          calculate={() => this.calculateHandler("Mul")}
        />
      </div>
    );
  }
}

export default Calculation;
