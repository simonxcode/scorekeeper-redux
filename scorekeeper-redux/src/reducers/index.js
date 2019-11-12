import { combineReducers } from 'redux';
import gameScoreReducer from './GameScoreReducer';
import playerOneReducer from './PlayerOneReducer';
import playerTwoReducer from './PlayerTwoReducer';

const rootReducer = (state, action) => {
  if (action.type === 'RESET_GAME') {
    state = undefined;
  }
  return appReducer(state, action);
}

const appReducer = combineReducers({
 gameScoreReducer,
 playerOneReducer,
 playerTwoReducer
});

export default rootReducer;



