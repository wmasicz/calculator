import React, { Component } from 'react';
import { Button } from './components/Button';
import './App.scss';
import SumButton from './components/SumButton';
import Input from './components/Input';


export default class App extends Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <div className="row">
            <Input input={this.state.input} />
          </div>
          <div className="row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>-</Button>
          </div>
          <div className="row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>+</Button>
          </div>
          <div className="row">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>*</Button>
          </div>
          <div className="row">
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
            <Button>/</Button>
          </div>
          <div className="row">
            <SumButton />
          </div>
        </div>
      </div>
    )
  }
}