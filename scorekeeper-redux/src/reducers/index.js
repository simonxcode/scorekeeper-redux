import { combineReducers } from 'redux';
import PlayerOneReducer from './PlayerOneReducer';
import PlayerTwoReducer from './PlayerTwoReducer';
import GameScoreReducer from './GameScoreReducer';

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
  gameScoreCounter: GameScoreReducer, 
  playerOneCounter: PlayerOneReducer,
  playerTwoCounter: PlayerTwoReducer
});



