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

    //container for storing Button element to increment player 2 score
    let incrementButtonOne;
   
    /*
    prevent player 1 score from being higher than game score and
    prevent final score from being a tie 
    */
    if(gameScore === playerOne) {
      incrementButtonOne = (
        <Button 
          className='player-increment__button'
          action={this.incrementPlayerOne}
          buttonTitle='+'
          disabled={true}
        />
      )
    } else if(gameScore === playerTwo) {
      incrementButtonOne = (
        <Button 
          className='player-increment__button'
          action={this.incrementPlayerOne}
          buttonTitle='+'
          disabled={true}
        />
      )
    } else {
      incrementButtonOne = (
        <Button  
          className='player-increment__button'
          action={this.incrementPlayerOne}
          buttonTitle='+'
          disabled={false}
        />
      )
    }
    return (
      <div>
        <div className='player-one__title'>
          Player 1:
        </div>
        <div className='player-one__score'>
          {playerOne}
        </div>
        <div>
         {incrementButtonOne}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playerOne: state.playerOneReducer.playerOne,
    playerTwo: state.playerTwoReducer.playerTwo,
    gameScore: state.gameScoreReducer.gameScore
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementOne: (playerOne) => {
      dispatch(incrementOne(playerOne))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerOneComponent);




