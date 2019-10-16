const playerTwoDefaultState = {
  playerTwo: 0
}

function playerTwoReducer(state = playerTwoDefaultState, action) {
  switch (action.type) {
    case 'INCREMENTTWO':
      return {
        ...state, ...action
      };
    default:
      return state;
  }
};

export default playerTwoReducer;