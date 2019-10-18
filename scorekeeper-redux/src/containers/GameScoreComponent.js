import React, { Component } from 'react';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { incrementGame, decrementGame, resetGame } from '../actions/index';

//this component will execute the action generator function 
class GameComponent extends Component {

  incrementGame = () => {
    this.props.onIncrementGame(this.props.gameScore)
  }

  decrementGame = () => {
    this.props.onDecrementGame(this.props.gameScore)
  }

  resetGame = () => {
    this.props.onResetGame(this.props.gameScore)
  }


  render() {
    const {gameScore}=this.props
    const {playerOne}=this.props
    const {playerTwo}=this.props
    return (
      <div>
        <h1>Playing up to: {gameScore}</h1>
          {playerOne === gameScore && playerOne !== 0 && (
            <div>
              <p>Player One is the Winner!</p>
            </div>
          )}
          {playerTwo === gameScore && playerTwo !== 0 && (
            <div>
              <p>Player Two is the Winner!</p>
            </div>
          )}
        <Button action={this.incrementGame} buttonTitle='+' />
        <Button action={this.decrementGame} buttonTitle='-' />
        <Button action={this.resetGame} buttonTitle='Reset Game' />
      </div>
    );
  }
}

//function to retrieve current state
const mapStateToProps = (state) => {
  console.log('Game Score', state)
  return {
    gameScore: state.gameScoreReducer.gameScore,
    playerOne: state.playerOneReducer.playerOne,
    playerTwo: state.playerTwoReducer.playerTwo
  }
}

//function to dispath action and action generator(event handler)
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementGame: (gameScore) => {
      console.log('Incrementing Game Score')
      dispatch(incrementGame(gameScore))
    },
    onDecrementGame: (gameScore) => {
      console.log('Decrementing Game Score')
      dispatch(decrementGame(gameScore))
    },
    onResetGame: (gameScore) => {
      console.log('Resetting Game Score')
      dispatch(resetGame(gameScore))
    }
  }
} 

//export component to store
export default connect(mapStateToProps, mapDispatchToProps)(GameComponent)
