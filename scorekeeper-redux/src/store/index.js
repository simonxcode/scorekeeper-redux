import { createStore } from 'redux';

//initial state of winning score, player 1 score and player 2 score
const initialState = {
  count: 5,
  playerOne: 0,
  playerTwo: 0
};

//reducer function for updating object 
const reducer = (state = initialState, action) => {
  console.log('reducer running', action);

  switch(action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {count: state.count + 1 });
    case 'DECREMENT':
      return Object.assign({}, state, {count: state.count - 1});
    case 'INCREMENTONE':
      return Object.assign({}, state, {playerOne: state.playerOne + 1});
    case 'INCREMENTTWO':
      return Object.assign({}, state, {playerTwo: state.playerTwo + 1});
    default: 
      return state;
  }
}
//redux state container
const store = createStore(reducer);

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