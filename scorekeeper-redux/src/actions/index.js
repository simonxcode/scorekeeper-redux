export const incrementOne = count => {
  const num = count + 1
  return {
  type: 'INCREMENT_ONE',
  playerOne: num
  }
}

export const incrementTwo = count => {
  const num = count + 1
  return {
    type: 'INCREMENT_TWO',
    playerTwo: num
  }
}

//this is the action object, it purpose is to send information to the store 
//must have a type property defined as string literal to define the type of action to perform
export const incrementGame = count => {
  const num = count + 1
  return {
    type: 'INCREMENT_GAME',
    gameScore: num
  }
}

export const decrementGame = count => {
  const num = count - 1
  return {
    type: 'DECREMENT_GAME',
    gameScore: num
  }
}



