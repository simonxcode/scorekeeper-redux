import React, { Component } from 'react';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { incrementGame } from '../actions/index';

//this component will execute the action generator function 
class GameComponent extends Component {
  incrementGame = () => {
    this.props.onIncrementGame(this.props.gameScore)
  }
  render() {
    const {gameScore}=this.props
    return (
      <div>
        <h1>Game Score: {gameScore}</h1>
        <Button action={this.incrementGame} buttonTitle='+' />
      </div>
    );
  }
}

//function to retrieve current state
const mapStateToProps = (state) => {
  console.log('Game Score', state)
  return {
    gameScore: state.gameScoreCounter.gameScore
  }
}

//function to dispath action and action generator(event handler)
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementGame: (gameScore) => {
      console.log('Incrementing Game Score')
      dispatch(incrementGame(gameScore))
    }
  }
} 

//export component to store
export default connect(mapStateToProps, mapDispatchToProps)(GameComponent)
