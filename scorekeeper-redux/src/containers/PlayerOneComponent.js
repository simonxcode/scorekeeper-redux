import React, { Component } from 'react';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { incrementOne } from '../actions/index';

class PlayerOneComponent extends Component {
  incrementPlayerOne = () => {
    this.props.onIncrementOne(this.props.playerOne)
  }
  render() {
    const {playerOne}=this.props
    return (
      <div>
        <h1>Player 1 Score: {playerOne}</h1>
        <Button action={this.incrementPlayerOne} buttonTitle ='+'/>
      </div>
    );
  }
}

//function to retrieve current state
const mapStateToProps = (state) => {
  console.log('Player 1 score', state)
  return {
    playerOne: state.playerOneCounter.playerOne
  }
}

//function to dispatch action and action generator(event handler)
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementOne: (playerOne) => {
      console.log('Incrementing Player 1')
      dispatch(incrementOne(playerOne))
    }
  }
}

//connect component to store
export default connect(mapStateToProps, mapDispatchToProps)(PlayerOneComponent);

//stateless function component
// function PlayerOne(props) {
//   return (
//     <div>
//       <p>Player one {props.playerOne}</p>
//       <button 
//       onClick={props.incrementPlayerOne} 
//       disabled={props.playerOne === props.count ? true:false}
//       >
//       Increase Score
//       </button>
//     </div>
//   );
// } 

//function to dispatch action and action generator(event handler)
// function mapDispatchToProps(dispatch) {
//   return {
//      incrementPlayerOne: () => {
//        console.log('incrementing player 1');
//        const action = {
//          type: 'INCREMENTONE'
//        };
//        dispatch(action);
//      }
//   }
// }

//function to retrieve current state
// function mapStateToProp(state) {
//   console.log('player one score', state);
//   return {
//     playerOne: state.playerReducer.playerOne,
//     count: state.winnerReducer.count
//   }
// }

//connect component to store
// export default connect(mapStateToProp, mapDispatchToProps)(PlayerOne);



