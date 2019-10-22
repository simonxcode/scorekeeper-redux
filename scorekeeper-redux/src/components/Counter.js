import React from 'react';
import { connect } from 'react-redux';

//stateless function component and event handler
function Counter(props) {

  let decrement;
  if(props.count === props.playerOne){
        decrement = (
        <button 
          onClick={props.onDecrementClick}
          disabled={true}
        >
        Decrement
        </button> 
        )
      } else if (props.count === props.playerTwo) {
        decrement = (
        <button 
          onClick={props.onDecrementClick}
          disabled={true}
        >
        Decrement
        </button>   
        )
      } else {
       decrement = (
        <button 
          onClick={props.onDecrementClick}
          disabled={false}
        >
        Decrement
        </button>   
        ) 
      }  

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
      {decrement}
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
      const action = { type: 'INCREMENT'};
      dispatch(action);
    },
    onDecrementClick: () => {
      const action = {type: 'DECREMENT'};
      dispatch(action);
    },
    onResetClick: () => {
      const action = {type: 'RESET'};
      dispatch(action);
    },
  }
}

//function to retrieve current state
function mapStateToProp(state) {
  return {
    count: state.winnerReducer.count,
    playerOne: state.playerReducer.playerOne,
    playerTwo: state.playerReducer.playerTwo
  } 
}

//connect component to store
export default connect(mapStateToProp, mapDispatchToProps)(Counter);