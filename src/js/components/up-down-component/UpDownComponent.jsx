import React, { Component } from 'react';
import { connect } from 'react-redux';

export class UpDownComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
    };

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }
  decrementCount() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    const { count } = this.state; // how would I do this with redux?
    return (
      <div>
        <p>{count}</p>
        <button type="button" name="Increment" onClick={this.incrementCount} >Up</button>
        <button type="button" name="Decrement" onClick={this.decrementCount} >Down</button>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(UpDownComponent);
