'use strict'
const store = require('./../store.js')

const checkForWinner = (index) => {
  // IDEA - make a nested array of indices of the possible winning combinations, iterate through each nested array, use those indices to check the cells in the game board for a winner. If a winner is identified, record that info, disable the board, do other necessary things, and break the loop. Could use an "any" or "some" iterator possibly
  const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  // console.log(`index is ${index}`)
  store.game.cells[index] = store.game.player1Move ? 'x' : 'o'
  // console.log(store.game.cells)

  // Conditional chain to check for winner on current board state
  if (store.game.cells[0] && store.game.cells[1] && store.game.cells[2] && store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2]) {
    // Check if first row contains winner
    console.log(`${store.game.cells[0]} wins, row 1!`)
    console.log(store.game.cells)
    $('.game-box').off('click') // disables board
  } else if (store.game.cells[3] && store.game.cells[4] && store.game.cells[5] && store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5]) {
    // Check if second row contains winner
    console.log(`${store.game.cells[3]} wins, row 2!`)
    console.log(store.game.cells)
    $('.game-box').off('click') // disables board
  } else if (store.game.cells[6] && store.game.cells[7] && store.game.cells[8] && store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8]) {
    // Check if third row contains winner
    console.log(`${store.game.cells[6]} wins, row 3!`)
    console.log(store.game.cells)
    $('.game-box').off('click') // disables board
  } else if (store.game.cells[0] && store.game.cells[3] && store.game.cells[6] && store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6]) {
    // Check if first column contains winner
    console.log(`${store.game.cells[0]} wins, col 1!`)
    console.log(store.game.cells)
    $('.game-box').off('click') // disables board
  } else if (store.game.cells[1] && store.game.cells[4] && store.game.cells[7] && store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7]) {
    // Check if second column contains winner
    console.log(`${store.game.cells[1]} wins, col 2!`)
    console.log(store.game.cells)
    $('.game-box').off('click') // disables board
  } else if (store.game.cells[2] && store.game.cells[5] && store.game.cells[8] && store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8]) {
    // Check if third column contains winner
    console.log(`${store.game.cells[2]} wins, col 3!`)
    console.log(store.game.cells)
    $('.game-box').off('click') // disables board
  } else if (store.game.cells[0] && store.game.cells[4] && store.game.cells[8] && store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8]) {
    // Check if first diagonal contains winner
    console.log(store.game.cells)
    console.log(`${store.game.cells[0]} wins, diag 1!`)
    $('.game-box').off('click') // disables board
  } else if (store.game.cells[2] && store.game.cells[4] && store.game.cells[6] && store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6]) {
    // Check if second diagonal contains winner
    console.log(`${store.game.cells[2]} wins, diag 2!`)
    console.log(store.game.cells)
    $('.game-box').off('click') // disables board
  } else if (store.game.cells.every(cell => cell !== '')) {
    console.log("it's a tie!")
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
