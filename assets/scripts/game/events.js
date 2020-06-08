'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const gameLogic = require('./game-logic.js')

const newGame = (event) => {
  // Render empty game board
  ui.renderNewGame()

  // Reset all local game storage
  gameLogic.setNewGame()
  // API call for new game to be created; use response data to assign game id to storage
  api.createGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onBlockSelect = (event) => {
  const block = event.target
  ui.updateGameBoard(block)

  $(block).off('click')
  const index = parseInt(block.id.slice(-1)) // either move to game logic or pass into game logic function
  // Add api call below
  api.updateGame(index)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)

  // Checks the board to see if there is a winner; switches turn to the next player if no winner
  gameLogic.checkForWinner(index)
  // ***NEED one more API update call if the game is over, to update gameover to true
  // *** IF A WINNER is determined, need another set of functions to disable game board, update game API, display results, and offer option to start new game
}

module.exports = {
  newGame,
  onBlockSelect
}
