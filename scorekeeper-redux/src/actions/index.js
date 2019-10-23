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

export const resetGame = count => {
  const num = count 
  return {
    type: 'RESET_GAME',
    gameScore: num
  }
}



