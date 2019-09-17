import React from 'react';
import { connect } from 'react-redux';

//stateless function component
function PlayerTwo(props) {
  return (
    <div>
      <p>Player two {props.playerTwo}</p>
      <button onClick={props.incrementPlayerTwo}>Increase Score</button>
    </div>
  );
} 

//function to dispatch action and action generator(event handler)
function mapDispatchToProps(dispatch) {
  return {
     incrementPlayerTwo: () => {
       console.log('incrementing player 2');
       const action = {
         type: 'INCREMENTTWO'
       };
       dispatch(action);
     }
  }
}

//function to display current state
function mapStateToProp(state) {
  console.log('player two score', state);
  return {
    playerTwo: state.playerTwo
  }
}
//connect component to store
export default connect(mapStateToProp, mapDispatchToProps)(PlayerTwo);



