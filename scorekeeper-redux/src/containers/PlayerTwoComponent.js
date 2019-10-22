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

     /* logic for disabling player 2 button if player 2 or player 1 
    score matches game score */
    let incrementButtonTwo;
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

//function to retrieve current state
const mapStateToProps = (state) => {
  console.log('Player 2 score', state)
  return {
    playerOne: state.playerOneReducer.playerOne,
    playerTwo: state.playerTwoReducer.playerTwo,
    gameScore: state.gameScoreReducer.gameScore
  }
}

//function to dispatch action and action generator(event handler)
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementTwo: (playerTwo) => {
      console.log('Incrementing Player 2')
      dispatch(incrementTwo(playerTwo))
    }
  }
}

//connect component to store
export default connect(mapStateToProps, mapDispatchToProps)(PlayerTwoComponent);




