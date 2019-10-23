const playerTwoDefaultState = {
  playerTwo: 0
}

function playerTwoReducer(state = playerTwoDefaultState, action) {
  switch(action.type) {
    case 'INCREMENT_TWO':
      return {
        ...state, ...action
      };
    default:
      return state;
  }
};

export default playerTwoReducer;