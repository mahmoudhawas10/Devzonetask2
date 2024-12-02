import { Component } from "react";
class Counter extends Component {
  state = {
    mynum: 0,
  };

  Decrement = () => {
    if (this.state.mynum > 0) {
      this.setState({
        mynum: this.state.mynum - 1,
      });
    }
  };

  Increment = () => {
    this.setState({
      mynum: this.state.mynum + 1,
    });
  };

  render() {
    return (
      <div className="counter">
        <h1 style={{ color: `${this.state.mynum > 5 ? "red" : "green"}` }}>
          {this.state.mynum}
        </h1>
        <h2 style={{color: `${this.state.mynum > 5 ? "red" : "green"}`}}>Welcome, {this.props.myname}!</h2>
        <h2 style={{color: `${this.state.mynum > 5 ? "green" : "red"}`}}>my age is, {this.props.myname}!</h2>

        <div>
          <button onClick={this.Decrement}>Decrement</button>
          <button onClick={this.Increment}>Increment</button>
        </div>
      </div>
    );
  }
}

export default Counter;
