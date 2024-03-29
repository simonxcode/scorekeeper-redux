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
    if (gameScore === playerOne || gameScore === 1) {
      decrement = (
        <Button 
          className='game-score__button'
          action={this.decrementGame} 
          buttonTitle='-' 
          disabled={true}
        />
      );
    } else if (gameScore === playerTwo || gameScore === 1) {
      decrement = (
        <Button 
          className='game-score__button'
          action={this.decrementGame} 
          buttonTitle='-' 
          disabled={true}
        /> 
      )
    } else {
      decrement = (
        <Button 
          className='game-score__button'
          action={this.decrementGame} 
          buttonTitle='-' 
          disabled={false}
        /> 
      );
    }
    return (
      <div>
        <div>
          <div className='game-score__title'>
            Playing up to: 
          </div>
            {playerOne !== gameScore && playerTwo !== gameScore && (
              <div className='game-score__winning-score'> 
                {gameScore}
              </div>
            )}
            {playerOne === gameScore && playerOne !== 0 && (
              <div>
                <p>Player 1 is the winner!</p>
              </div>
              )}
              {playerTwo === gameScore && playerTwo !== 0 && (
              <div>
                <p>Player 2 is the winner!</p>
              </div>
              )}
        </div>
        <div className='game-score__button-container'>
            <Button 
              className='game-score__button'
              action={this.incrementGame} buttonTitle='+' 
            />
            {decrement}
        </div>
        <Button 
          className='reset-button' 
          action={this.resetGame} buttonTitle='Reset Game' 
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(GameComponent);
