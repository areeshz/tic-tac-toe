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

  // De-activate any click handlers that may have been present from a previous game
  $('.game-box').off('click', onBlockSelect)

  // Activate click handlers for game boxes
  $('.game-box').on('click', onBlockSelect)

  // API call for new game to be created; use response data to assign game id to storage
  api.createGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onStatsPage = () => {
  console.log('time to show some stats')
  // API GET call to retrieve user's game data
  api.getGames(true)
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const onBlockSelect = (event) => {
  const block = event.target
  // Update game board with image to reflect player's move
  ui.updateGameBoard(block)

  // Disable that block from being selected again
  $(block).off('click', onBlockSelect)

  // Grabs index of game box selected
  const index = parseInt(block.id.slice(-1))

  // Stores move in local storage, checks the board to see if there is a winner
  const winner = gameLogic.checkForWinner(index)
  console.log(`winner is ${winner}`)

  // If there is a winner, display winner message and add option to start new game
  if (winner) {
    $('#play-again-div').removeClass('hidden')
    $('#play-again-button').on('click', onNewGame)
  }

  // PATCH request to API to update game state
  api.updateGame(index, winner)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)

  // Switch turn to next player
  gameLogic.switchTurn()
}

const onPlayAgain = () => { // does this get used anywhere??????
  console.log('time to play again')
}

const toHome = () => {
  $('.page').addClass('hidden')
  $('#home-page').removeClass('hidden')
}

module.exports = {
  onNewGame,
  onBlockSelect,
  onPlayAgain,
  onStatsPage,
  toHome
}
