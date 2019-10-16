import { combineReducers } from 'redux';
import PlayerOneReducer from './PlayerOneReducer';
import PlayerTwoReducer from './PlayerTwoReducer';

// const rootReducer = (state, action) => {
//   if (action.type === 'RESET') {
//     state = undefined;
//   }
//   return appReducer(state, action);
// }

// const appReducer = combineReducers({
//   CounterReducer
// });

export default combineReducers({
  playerOneCounter: PlayerOneReducer,
  playerTwoCounter: PlayerTwoReducer
});



