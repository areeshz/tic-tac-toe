'use strict'
const store = require('./../store.js')

const checkForWinner = (index) => {
  // IDEA - make a nested array of indices of the possible winning combinations, iterate through each nested array, use those indices to check the cells in the game board for a winner. If a winner is identified, record that info, disable the board, do other necessary things, and break the loop. Could use an "any" or "some" iterator possibly
  const combos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ]

  // Update local store with latest game move
  store.game.cells[index] = store.game.player1Move ? 'x' : 'o'
  const cells = store.game.cells
  let winnerFound
  let winner

  // Check for any winning combos
  for (let i = 0; i < combos.length; i++) {
    const combo = combos[i]
    if (combo.every(index => cells[index] !== '')) {
      if (cells[combo[0]] === cells[combo[1]] && cells[combo[1]] === cells[combo[2]]) {
        console.log(`found a winner`)
        winnerFound = true
        console.log(`cells[combo[0]] is ${cells[combo[0]]}`)
        winner = cells[combo[0]]
        break
      }
    }
  }

  if (!winnerFound && cells.every(cell => cell !== '')) {
    winnerFound = true
    winner = 'tie'
  }

  if (winnerFound) {
    switch (winner) {
      case 'x':
        console.log(`X is the winner!`)
        break
      case 'o':
        console.log(`O is the winner!`)
        break
      case 'tie':
        console.log(`oof, it's a tie!`)
    }
  }

  store.game.player1Move = !store.game.player1Move // Switch turn to next user
}

const setNewGame = () => {
  store.game = {
    player1Move: true,
    cells: ['', '', '', '', '', '', '', '', '']
  }
}

module.exports = {
  checkForWinner,
  setNewGame
}
