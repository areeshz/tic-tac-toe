'use strict'
const store = require('./../store.js')

const checkForWinner = (index) => {
  // Initialize array of all possible winning combinations
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
        winnerFound = true
        winner = cells[combo[0]]
        break
      }
    }
  }

  // Check for tie if no winner found but every space is filled
  if (!winnerFound && cells.every(cell => cell !== '')) {
    winnerFound = true
    winner = 'tie'
  }

  // Select appropriate winning message
  if (winnerFound) {
    switch (winner) {
      case 'x':
        $('#results-message').text(`Player 1 is the winner!`).removeClass().addClass('success')
        break
      case 'o':
        $('#results-message').text(`Player 2 is the winner!`).removeClass().addClass('failure')
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
  $('#results-message').text(text) // Display/switch player's turn indicator
}

const setNewGame = () => {
  // Reset local game storage upon new game started
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
