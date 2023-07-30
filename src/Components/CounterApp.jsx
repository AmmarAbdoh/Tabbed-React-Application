import React from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "../actions/counterActions";
import "./css/CounterApp.css";
const CounterApp = ({ counter, incrementCounter, decrementCounter }) => {
  return (
    <div className="counter-app">
      <h1 className="counter-title">Counter App</h1>
      <div className="counter">{counter}</div>
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
