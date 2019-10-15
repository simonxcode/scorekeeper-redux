export const incrementOne = count => {
  const num = count+1
  return {
  type: 'INCREMENTONE',
  playerOne: num
  }
}

