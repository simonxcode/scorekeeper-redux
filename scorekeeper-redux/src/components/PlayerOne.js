import React from 'react';
import { connect } from 'react-redux';

//stateless function component
function PlayerOne(props) {
  return (
    <div>
      <p>Player one {props.playerOne}</p>
      <p>Winning score {props.count}</p>
      <button 
      onClick={props.incrementPlayerOne} 
      disabled={props.playerOne === props.count ? true:false}
      >
      Increase Score
      </button>
    </div>
  );
} 

//function to dispatch action and action generator(event handler)
function mapDispatchToProps(dispatch) {
  return {
     incrementPlayerOne: () => {
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
    playerOne: state.playerReducer.playerOne,
    count: state.winnerReducer.count
  }
}

//connect component to store
export default connect(mapStateToProp, mapDispatchToProps)(PlayerOne);



