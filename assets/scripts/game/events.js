'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const gameLogic = require('./game-logic.js')
const store = require('./../store.js')

const onNewGame = (event) => {
  // Render empty game board
  ui.renderNewGame()

  // Reset all local game storage
  gameLogic.setNewGame()

  // Remove "play again" button if present, and initialize player turn message
  $('#play-again-button').off('click', onNewGame)
  $('#play-again-div').addClass('hidden')
  $('#results-message').text("Player 1's Turn").removeClass()

  // Unhide "back to home" button that triggers modal if you leave during a game
  $('#modal-button-div').removeClass('hidden')

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

  // PATCH request to API to update game state
  api.updateGame(index, winner)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)

  // If there is a winner, display winner message and add option to start new game
  if (winner) {
    // Prevent any additional moves from being made on the board, show play again options
    $('.game-box').off('click', onBlockSelect)
    $('#results-div').removeClass('hidden')
    $('#play-again-button').on('click', onNewGame)
    $('#play-again-div').removeClass('hidden')

    // Hide modal button since game is over
    $('#modal-button-div').addClass('hidden')
  } else {
    gameLogic.switchTurn() // switch turn and update turn message if the game is still ongoing
  }
}

const toHome = () => {
  // Hide all pages, and show home page
  $('.page').addClass('hidden')
  $('#home-page').removeClass('hidden')
}

const onCustomize = () => {
  // Hide all pages, and show customize page
  $('.page').addClass('hidden')
  $('#customize-section').removeClass('hidden')
}

const changeSymbolOne = (event) => {
  const btn = event.target

  // Change button colors to highlight selected item
  $('.custom-button-1').removeClass('btn-primary').removeClass('btn-success').addClass('btn-primary')
  $(btn).removeClass('btn-primary').addClass('btn-success')

  // Change player 1 game piece image source
  store.src1 = `public/${btn.id}.png`
}

const changeSymbolTwo = (event) => {
  const btn = event.target

  // Change button colors to highlight selected item
  $('.custom-button-2').removeClass('btn-primary').removeClass('btn-success').addClass('btn-primary')
  $(btn).removeClass('btn-primary').addClass('btn-success')

  // Change player 2 game piece image source
  store.src2 = `public/${btn.id}.png`
}

const changeTheme = () => {
  const theme = event.target.id

  // Change theme class to selected theme
  $('body').removeClass().addClass(theme)
}

module.exports = {
  onNewGame,
  onBlockSelect,
  onStatsPage,
  toHome,
  onCustomize,
  changeSymbolOne,
  changeSymbolTwo,
  changeTheme
}
