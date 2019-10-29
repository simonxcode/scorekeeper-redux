import React, {Component} from 'react';
import Button from '../components/Button';
import {connect} from 'react-redux';
import {incrementGame, decrementGame, resetGame} from '../actions/index';

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

     //container for storing Button element to decrement game score 
    let decrement;

    //prevent game score from falling below player's score
    if (gameScore === playerOne) {
      decrement = (
        <Button 
          action={this.decrementGame} 
          buttonTitle='-' 
          disabled={true}
        />
      )
    } else if (gameScore === playerTwo) {
      decrement = (
        <Button 
          action={this.decrementGame} 
          buttonTitle='-' 
          disabled={true}
        /> 
      )
    } else {
      decrement = (
        <Button 
          action={this.decrementGame} 
          buttonTitle='-' 
          disabled={false}
        /> 
      )  
    }
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
        {decrement} 
        <Button action={this.resetGame} buttonTitle='Reset Game' className='reset-button' />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gameScore: state.gameScoreReducer.gameScore,
    playerOne: state.playerOneReducer.playerOne,
    playerTwo: state.playerTwoReducer.playerTwo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementGame: (gameScore) => {
      dispatch(incrementGame(gameScore))
    },
    onDecrementGame: (gameScore) => {
      dispatch(decrementGame(gameScore))
    },
    onResetGame: (gameScore) => {
      dispatch(resetGame(gameScore))
    }
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(GameComponent)
