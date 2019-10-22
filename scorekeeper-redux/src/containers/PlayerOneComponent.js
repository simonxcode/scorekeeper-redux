import React, {Component} from 'react';
import Button from '../components/Button';
import {connect} from 'react-redux';
import {incrementOne} from '../actions/index';

class PlayerOneComponent extends Component {
  incrementPlayerOne = () => {
    this.props.onIncrementOne(this.props.playerOne)
  }
  render() {
    const {playerOne}=this.props
    const {playerTwo}=this.props
    const {gameScore}=this.props

    /* logic for disabling player 1 button if player 1 or player 2 
    score matches game score */
    let incrementButtonOne;
    if(gameScore === playerOne) {
      incrementButtonOne = (
        <Button 
          action={this.incrementPlayerOne}
          buttonTitle='+'
          disabled={true}
        />
      )
    } else if(gameScore === playerTwo) {
      incrementButtonOne = (
        <Button 
          action={this.incrementPlayerOne}
          buttonTitle='+'
          disabled={true}
        />
      )
    } else {
      incrementButtonOne = (
        <Button 
          action={this.incrementPlayerOne}
          buttonTitle='+'
          disabled={false}
        />
      )
    }
    return (
      <div>
        <h1>Player 1 Score: {playerOne}</h1>
        {incrementButtonOne}
      </div>
    );
  }
}

//function to retrieve current state
const mapStateToProps = (state) => {
  return {
    playerOne: state.playerOneReducer.playerOne,
    playerTwo: state.playerTwoReducer.playerTwo,
    gameScore: state.gameScoreReducer.gameScore
  }
}

//function to dispatch action and action generator(event handler)
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementOne: (playerOne) => {
      dispatch(incrementOne(playerOne))
    }
  }
}

//connect component to store
export default connect(mapStateToProps, mapDispatchToProps)(PlayerOneComponent);




