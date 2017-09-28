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
  }

  render() {
    const { count } = this.props;
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
