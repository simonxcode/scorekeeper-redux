import React, {Component} from 'react';
import Button from '../components/Button';
import {connect} from 'react-redux';
import {incrementTwo} from '../actions/index';

class PlayerTwoComponent extends Component {
  incrementPlayerTwo = () => {
    this.props.onIncrementTwo(this.props.playerTwo)
  }
  render() {
    const {playerOne}=this.props
    const {playerTwo}=this.props
    const {gameScore}=this.props

    //container for storing Button element to increment player 2 score
    let incrementButtonTwo;

    /*
    prevent player 2 score from being higher than game score and
    prevent final score from being a tie 
    */
    if(gameScore === playerTwo) {
      incrementButtonTwo = (
        <Button 
          action={this.incrementPlayerTwo}
          buttonTitle='+'
          disabled={true}
        />
      )
    } else if(gameScore === playerOne) {
      incrementButtonTwo = (
        <Button 
          action={this.incrementPlayerTwo}
          buttonTitle='+'
          disabled={true}
        />
      )
    } else {
      incrementButtonTwo = (  
        <Button 
          action={this.incrementPlayerTwo}
          buttonTitle='+'
          disabled={false}
        />
      )
    }
    return (
      <div>
        <h1>Player 2 Score: {playerTwo}</h1>
        {incrementButtonTwo}
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
    onIncrementTwo: (playerTwo) => {
      console.log('Incrementing Player 2')
      dispatch(incrementTwo(playerTwo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerTwoComponent);




