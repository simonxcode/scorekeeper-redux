import React from 'react';
import { connect } from 'react-redux';

//stateless function component
function Counter(props) {
  console.log('render', props)
  return (
    <div>
      <h1>I am a counter!</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrementClick}>Increment</button>
    </div>
  );
}

//function to dispatch action
function mapDispatchToProps(dispatch){
  return {
    onIncrementClick: () => {
      console.log('clickin');
      const action = { type: 'INCREMENT'};
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