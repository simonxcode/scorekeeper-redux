//default state of count for game score
const gameScoreDefaultState = {
  gameScore: 0
}

//reducer function to update state when action case is called
function gameScoreReducer (state = gameScoreDefaultState, action) {
  switch(action.type){
    case 'INCREMENT_GAME':
      return {
        ...state, ...action
      };
    case 'DECREMENT_GAME':
      return {
        ...state, ...action
      };
    default:
      return state;
  }
};

export default gameScoreReducer;