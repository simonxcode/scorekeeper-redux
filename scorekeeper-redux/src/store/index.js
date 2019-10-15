import { createStore } from 'redux';
import appReducer from '../reducers';

//initial state of player's score
// const playerDefaultState = {
//   playerOne: 0,
//   playerTwo: 0
// };

//reducer function for updating object 
// const playerReducer = (state = playerDefaultState, action) => {
//   console.log('player reducer running', action);
//   switch(action.type) {
//     case 'INCREMENTONE':
//       return Object.assign({}, state, {playerOne: state.playerOne + 1});
//     case 'INCREMENTTWO':
//       return Object.assign({}, state, {playerTwo: state.playerTwo + 1});
//     default: 
//       return state;
//   }
// }

//initial state of winning score
// const winnerDefaultState = {
//   count: 5
// }

//reducer for updating winning score 
// const winnerReducer = (state = winnerDefaultState, action) => {
//   console.log('winner reducer running', action);
//   switch (action.type) {
//     case 'INCREMENT':
//       return Object.assign({}, state, {
//         count: state.count + 1
//       });
//     case 'DECREMENT':
//       return Object.assign({}, state, {
//         count: state.count - 1
//       });
//     default:
//       return state;
//   }
// }

//combined reducer
// const appReducer = combineReducers({
//   playerReducer,
//   winnerReducer
// });


// redux state container
const store = createStore(appReducer);

export default store;

