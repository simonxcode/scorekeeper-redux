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
    const {gameScore}=this.props
    return (
      <div>
        <h1>Player 1 Score: {playerOne}</h1>
        <Button 
          action={this.incrementPlayerOne} 
          buttonTitle ='+'
          disabled={playerOne === gameScore ? true:false} 
        />
      </div>
    );
  }
}

//function to retrieve current state
const mapStateToProps = (state) => {
  console.log('Player 1 score', state)
  return {
    playerOne: state.playerOneReducer.playerOne,
    gameScore: state.gameScoreReducer.gameScore
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




