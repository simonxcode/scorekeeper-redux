import React from 'react';
import { connect } from 'react-redux';

//stateless function component and event handler
function Counter(props) {
  console.log('render', props)
  return (
    <div>
      <h1> Playing up to {props.count} </h1>
      {props.playerOne === props.count && props.playerOne !== 0 && (
        <div>
          <p>Player One is the Winner!</p>
        </div>
      )}
         {props.playerTwo === props.count && props.playerTwo !== 0 && (
        <div>
          <p>Player Two is the Winner!</p>
        </div>
      )}
      <button onClick={props.onIncrementClick}>Increment</button>
      <button 
        onClick={props.onDecrementClick}
        disabled={props.count === props.playerOne || props.PlayerTwo ? true:false}
      >
      Decrement
      </button>
      <div>
        <button
        onClick={props.onResetClick}
      >
      Reset Game
      </button>
      </div>
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
    },
    onResetClick: () => {
      console.log('resetting game');
      const action = {type: 'RESET'};
      dispatch(action);
    },
  }
}

//function to retrieve current state
function mapStateToProp(state) {
  console.log('winning score', state);
  return {
    count: state.winnerReducer.count,
    playerOne: state.playerReducer.playerOne,
    playerTwo: state.playerReducer.playerTwo
  } 
}

//connect component to store
export default connect(mapStateToProp, mapDispatchToProps)(Counter);