import React from 'react';

class Counter extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      count: 0
    };
  }

  doIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}));
  };

  render() {
    return (
      <div class="counter-main">
        <span class="counter-label">{this.state.count}</span>
        <button onClick={this.doIncrement}>+1</button>
      </div>
    );
  }
}

export default Counter;

