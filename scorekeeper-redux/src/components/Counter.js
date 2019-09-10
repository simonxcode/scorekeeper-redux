import React from 'react';
import { connect } from 'react-redux';

//stateless function component
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

//function to dispatch action
function mapDispatchToProps(dispatch){
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

function mapStateToProp(state) {
  console.log('mapStateToProp', state);
  return {
    count: state.count
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(Counter);