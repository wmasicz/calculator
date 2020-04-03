import React, { Component } from 'react';
import { Button } from './components/Button';
import './App.scss';
import SumButton from './components/SumButton';
import Input from './components/Input';

import * as math from 'mathjs';


export default class App extends Component {
  state = {
    input: ""
  };

  count = (value) => {
    this.setState({
      input: this.state.input + value
    })
  }

  equal = () => {
    this.setState({
      input: math.evaluate(this.state.input)
    })
  }

  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <div className="row">
            <Input input={this.state.input} />
          </div>
          <div className="row">
            <Button handleClick={this.count}>1</Button>
            <Button handleClick={this.count}>2</Button>
            <Button handleClick={this.count}>3</Button>
            <Button handleClick={this.count}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.count}>4</Button>
            <Button handleClick={this.count}>5</Button>
            <Button handleClick={this.count}>6</Button>
            <Button handleClick={this.count}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.count}>7</Button>
            <Button handleClick={this.count}>8</Button>
            <Button handleClick={this.count}>9</Button>
            <Button handleClick={this.count}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.count}>.</Button>
            <Button handleClick={this.count}>0</Button>
            <Button handleClick={()=> this.equal()}>=</Button>
            <Button handleClick={this.count}>/</Button>
          </div>
          <div className="row">
            <SumButton handleClear={()=> this.setState({input: ""})}>
              C
            </SumButton>
          </div>
        </div>
      </div>
    )
  }
}