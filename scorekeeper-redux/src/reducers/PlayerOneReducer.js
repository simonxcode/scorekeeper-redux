const playerOneDefaultState = {
  playerOne: 0
}

function playerOneReducer (state = playerOneDefaultState, action) {
  switch(action.type) {
    case 'INCREMENTONE':
      return {
        ...state, ...action
      };
    default: 
      return state;  
  }
};

export default playerOneReducer;