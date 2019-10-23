const gameScoreDefaultState = {
  gameScore: 5
}

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