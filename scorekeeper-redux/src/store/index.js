import { createStore, combineReducers } from 'redux';

//initial state and player 1 score and player 2 score
const playerDefaultState = {
  playerOne: 0,
  playerTwo: 0
};

//reducer function for updating object 
const playerReducer = (state = playerDefaultState, action) => {
  console.log('player reducer running', action);
  switch(action.type) {
    case 'INCREMENTONE':
      return Object.assign({}, state, {playerOne: state.playerOne + 1});
    case 'INCREMENTTWO':
      return Object.assign({}, state, {playerTwo: state.playerTwo + 1});
    default: 
      return state;
  }
}

//initial state of winning score
const winnerDefaultState = {
  count: 5
}

//reducer function for updating winning score 
const winnerReducer = (state = winnerDefaultState, action) => {
  console.log('winner reducer running', action);
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case 'DECREMENT':
      return Object.assign({}, state, {
        count: state.count - 1
      });
    default:
      return state;
  }
}

// redux state container
const store = createStore(
  combineReducers({
    playerReducer,
    winnerReducer
  })
);


export default store;

/*
Game Winning Logic 
- when a player wins display a message containing winning player name
*/

//1. create a variable for the winning message
//2. winning message will contain a prop that is linked to the winner
//3. include a visibility property and initially set to false
//4. create logic that will compare `count` to `playerOne` an playerTwo` 
  //create a new reducer for this logic and call it gameWinner
  //will have to write a reducer to manage complete state of app
//5. if 'playerOne` or `playerTwo` value is equal `count` gameWinner visibility is now true
  //and player's names is pass into the gameWinner by prop 

/*
Do I need to create a new component with action and action generator for passing data to store?
- yes, if you want to change the state of something 
*/