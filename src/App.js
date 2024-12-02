import React, { Component } from 'react';
import Counter from './Component/Counter/Counter';

class App extends Component {
  state = {
    myname: "mahmoud",
    myage:23
  };

  render() {
    return (
      <div>
        <Counter myname={this.state.myname} myage={this.state.myage} />
      </div>
    );
  }
}

export default App;
