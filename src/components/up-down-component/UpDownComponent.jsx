import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from '../../js/redux/actions/CountActions';

class UpDown extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }

  increaseCount(event) {
    event.preventDefault();
    const inputCount = event.target.elements[0];
    if (inputCount.valueAsNumber) {
      this.props.increaseCount(inputCount.valueAsNumber);
    // debugger;
      inputCount.value = '';
      }
    else {
      return null;
    }
  }

  decreaseCount(event) {
    event.preventDefault();
    const inputCount = event.target.elements[0];
    if (inputCount.valueAsNumber) {
      this.props.decreaseCount(inputCount.valueAsNumber);
      inputCount.value = '';
    }
    else {
      return null;
    }
  }

  render() {
    const { up, down } = this.props;
    return (
      <div>
        <p>{up + down}</p>

        <form onSubmit={this.increaseCount}>
          <input type="number" />
          <input type="submit" value="Up" />
        </form>

        <form onSubmit={this.decreaseCount}>
          <input type="number" />
          <input type="submit" value="Down" />
        </form>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  up: state.upCount,
  down: state.downCount,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  increaseCount: count => dispatch(increaseCount(count)),
  decreaseCount: count => dispatch(decreaseCount(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  UpDown,
);
