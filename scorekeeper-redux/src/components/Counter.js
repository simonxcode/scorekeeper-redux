import React from 'react';
import { connect } from 'react-redux';

//stateless function component and event handler
function Counter(props) {
  console.log('render', props)
  return (
    <div>
      <h1> Playing up to {props.count} </h1>
      <button onClick={props.onIncrementClick}>Increment</button>
      <button onClick={props.onDecrementClick}>Decrement</button>
    </div>
  );
}

//function to dispatch action and action generator
function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => {
      console.log('incrementing');
      const action = { type: 'INCREMENT'};
      dispatch(action);
    },
    onDecrementClick: () => {
      console.log('decrementing');
      const action = {type: 'DECREMENT'};
      dispatch(action);
    }
  }
}

//function to display current state
function mapStateToProp(state) {
  console.log('winning score', state);
  return {
    count: state.count
  }
}

//connect component to store
export default connect(mapStateToProp, mapDispatchToProps)(Counter);