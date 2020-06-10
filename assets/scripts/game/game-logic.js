'use strict'
const store = require('./../store.js')
const events = require('./events.js')

const checkForWinner = (index) => {
  // IDEA - make a nested array of indices of the possible winning combinations, iterate through each nested array, use those indices to check the cells in the game board for a winner. If a winner is identified, record that info, disable the board, do other necessary things, and break the loop. Could use an "any" or "some" iterator possibly
  const combos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ]

  // Update local store with latest game move
  store.game.cells[index] = store.game.player1Move ? 'x' : 'o'
  const cells = store.game.cells
  let winnerFound = false
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
    console.log(`winner is ${winner}`)
  }

  if (winnerFound) {
    switch (winner) {
      case 'x':
        $('#results-message').text(`X is the winner!`).removeClass().addClass('success')
        break
      case 'o':
        $('#results-message').text(`O is the winner!`).removeClass().addClass('failure')
        break
      case 'tie':
        $('#results-message').text(`oof, it's a tie!`).removeClass().addClass('neutral')
    }


  }

  return winnerFound
}

const switchTurn = () => {
  store.game.player1Move = !store.game.player1Move // Switch turn to next user
  const text = store.game.player1Move ? "Player 1's Turn" : "Player 2's Turn"
  $('#results-message').text(text)
}

const setNewGame = () => {
  store.game = {
    player1Move: true,
    cells: ['', '', '', '', '', '', '', '', '']
  }
}

// Function that takes in a completed game from the API and returns the user's win/loss status
const determineWinner = (game) => {
  const combos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ]
  const cells = game.cells
  let winnerFound = false
  let winner
  for (let i = 0; i < combos.length; i++) {
    const combo = combos[i]
    if (combo.every(index => cells[index] !== '')) {
      if (cells[combo[0]] === cells[combo[1]] && cells[combo[1]] === cells[combo[2]]) {
        winnerFound = true
        winner = cells[combo[0]] === 'x' ? 'win' : 'loss'
        break
      }
    }
  }

  if (!winnerFound && cells.every(cell => cell !== '')) {
    winnerFound = true
    winner = 'tie'
  }

  if (winner === undefined) {
    console.log('Winner undefined, cells are: \n', cells)
  }
  return winner
}

const countWins = (games) => {
  store.stats = {
    win: 0,
    loss: 0,
    tie: 0,
    undefined: 0
  }
  games.forEach((game) => {
    const winner = determineWinner(game)
    store.stats[winner] += 1
  })
}

module.exports = {
  checkForWinner,
  setNewGame,
  switchTurn,
  determineWinner,
  countWins
}
