import React, { Component } from "react";

export default class Counter extends Component {

  constructor(props) {
    super(props);
    this.state ={
      counter: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  
  handleIncrement() {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>{ counter }</h2>
        <button type="button" onClick={ this.handleIncrement }>
          Increment
        </button>
      </div>
    );
  };
};