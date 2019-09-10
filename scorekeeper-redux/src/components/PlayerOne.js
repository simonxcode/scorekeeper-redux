import React from 'react';
import { connect } from 'react-redux';

//stateless function component
function PlayerOne(props) {
  return (
    <div>
      <p>Player one {props.count}</p>
      <button onClick={props.onIncrementClick}>Increase Score</button>
    </div>
  );
} 

//function to dispatch action and action generator
function mapDispatchToProps(dispatch) {
  return {
     onIncrementClick: () => {
       console.log('incrementing player 1');
       const action = {
         type: 'INCREMENTONE'
       };
       dispatch(action);
     }
  }
}

//function to display current state
function mapStateToProp(state) {
  console.log('player one score', state);
  return {
    count: state.count
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(PlayerOne);



