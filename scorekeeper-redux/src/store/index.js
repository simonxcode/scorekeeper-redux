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