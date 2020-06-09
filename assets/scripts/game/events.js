'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const gameLogic = require('./game-logic.js')

const onNewGame = (event) => {
  // Render empty game board
  ui.renderNewGame()

  // Reset all local game storage
  gameLogic.setNewGame()

  // Remove "play again" button if present
  $('#play-again-button').off('click', onNewGame)
  $('#play-again-div').addClass('hidden')

  // Activate click handlers for game boxes
  $('.game-box').on('click', onBlockSelect)

  // API call for new game to be created; use response data to assign game id to storage
  api.createGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onBlockSelect = (event) => {
  const block = event.target
  ui.updateGameBoard(block)

  $(block).off('click', onBlockSelect)
  const index = parseInt(block.id.slice(-1)) // either move to game logic or pass into game logic function

  // Checks the board to see if there is a winner; switches turn to the next player if no winner
  const winner = gameLogic.checkForWinner(index)
  console.log(`winner is ${winner}`)

  if (winner) {
    // Set over to true so that it is reflected in the API game data
    // LASTLY, reset game board and state, create new game
    $('#play-again-div').removeClass('hidden')
    $('#play-again-button').on('click', onNewGame)
  }

  // Add api call below
  api.updateGame(index, winner)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
  // ***NEED one more API update call if the game is over, to update gameover to true
  // *** IF A WINNER is determined, need another set of functions to disable game board, update game API, display results, and offer option to start new game

  // Switch turn to next player
  gameLogic.switchTurn()
}

const onPlayAgain = () => {
  console.log('time to play again')
}

module.exports = {
  onNewGame,
  onBlockSelect,
  onPlayAgain
}
