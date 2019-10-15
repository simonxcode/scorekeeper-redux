const playerDefaultState = {
  playerOne: 0
}

function CounterReducer (state = playerDefaultState, action) {
  switch(action.type) {
    case 'INCREMENTONE':
      return {...state,...action};
    default: 
      return state;  
  }
}

export default CounterReducer;