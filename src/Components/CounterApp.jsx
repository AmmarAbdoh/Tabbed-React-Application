// src/components/CounterApp.js
import React from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "../actions/counterActions";

const CounterApp = ({ counter, incrementCounter, decrementCounter }) => {
  return (
    <div className="counter-app">
      <h1>Counter App</h1>
      <p>Counter Value: {counter}</p>
      <div className="buttons-section">
        <button onClick={incrementCounter} className="btn">
          Increase
        </button>
        <button onClick={decrementCounter} className="btn">
          Decrease
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
  };
};

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
