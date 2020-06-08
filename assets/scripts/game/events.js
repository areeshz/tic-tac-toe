'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const gameLogic = require('./game-logic.js')

const newGame = (event) => {
  // Render empty game board
  ui.renderNewGame()

  // Reset all local game storage

  // API call for new game to be created; use response data to assign game id to storage
}

const onBlockSelect = (event) => {
  const block = event.target
  ui.updateGameBoard(block)

  $(block).off('click')
  const index = parseInt(block.id.slice(-1)) // either move to game logic or pass into game logic function
  // Add api call below

  // Add game logic below
  gameLogic.checkForWinner(index)
}

module.exports = {
  newGame,
  onBlockSelect
}
