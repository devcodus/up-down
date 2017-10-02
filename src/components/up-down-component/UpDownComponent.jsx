import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from '../../js/redux/actions/CountActions';

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
        <button type="button" onClick={this.props.increaseCount} >Up</button>
        <button type="button" onClick={this.props.decreaseCount} >Down</button>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  count: state,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  increaseCount: () => dispatch(increaseCount(1)),
  decreaseCount: () => dispatch(decreaseCount(1)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  UpDown,
);
