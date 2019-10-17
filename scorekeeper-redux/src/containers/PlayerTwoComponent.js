import React, { Component} from 'react';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { incrementTwo } from '../actions/index';

class PlayerTwoComponent extends Component {
  incrementPlayerTwo = () => {
    this.props.onIncrementTwo(this.props.playerTwo)
  }
  render() {
    const {playerTwo}=this.props
    return (
      <div>
        <h1>Player 2 Score: {playerTwo}</h1>
        <Button action={this.incrementPlayerTwo} buttonTitle ='+'/>
      </div>
    );
  }
}

//function to retrieve current state
const mapStateToProps = (state) => {
  console.log('Player 2 score', state)
  return {
    playerTwo: state.playerTwoCounter.playerTwo
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




