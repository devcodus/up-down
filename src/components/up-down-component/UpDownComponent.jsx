import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from '../../js/redux/actions/CountActions';
import { changeInput } from '../../js/redux/actions/InputChangeActions';

class UpDown extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  increaseCount(event) {
    const inputCount = event.target;
    // if (inputCount.valueAsNumber) {
      this.props.increaseCount(inputCount.valueAsNumber);
    // debugger;
      // inputCount.value = '';
      // }
    // else {
    //   return null;
    // }
  }

  decreaseCount(event) {
    const inputCount = event.target;
    // if (inputCount.valueAsNumber) {
      this.props.decreaseCount(inputCount.valueAsNumber);

      // inputCount.value = '';
    // }
    // else {
      // return null;
    // }
  }

  handleChange(event) {
    this.props.changeInput(event.target.valueAsNumber);
  }

  render() {
    const { count } = this.props;
    return (
      <div>
        <p>{count}</p>

        <input type="number" onChange={this.handleChange} />
        <button onClick={this.increaseCount}>+</button>
        <button onClick={this.decreaseCount}>-</button>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  // up: state.upCount,
  // down: state.downCount,
  count: state.number,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  increaseCount: change => dispatch(increaseCount(change)),
  decreaseCount: change => dispatch(decreaseCount(change)),
  changeInput: number => dispatch(changeInput(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  UpDown,
);
