import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../../js/redux/actions/CountActions';

// @connect((store) => {
//   return {
//     count: store.count.count
//   };
// })

class UpDown extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // this.state = {
    //   count: 0,
    // };
    //
  //   this.incrementCount = this.incrementCount.bind(this);
  //   this.decrementCount = this.decrementCount.bind(this);
  // }

  // incrementCount() {
  //   this.setState({ count: this.state.count + 1 });
  // }
  // decrementCount() {
  //   this.setState({ count: this.state.count - 1 });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>{count}</p>
        <button type="button" name="Increment" onClick={this.incrementCount} >Up</button>
        <button type="button" name="Decrement" onClick={this.decrementCount} >Down</button>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  incrementCount: count => dispatch(incrementCount(count)),
  decrementCount: count => dispatch(decrementCount(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  UpDown,
);
