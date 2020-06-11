'use strict'
const store = require('./../store.js')
const gameLogic = require('./game-logic.js')

const renderNewGame = () => {
  // Hide home page section
  $('#home-page').addClass('hidden')

  // Ensure game board is empty of images and display game board section
  $('.game-box').html('')
  $('#game-board-section').removeClass('hidden')
}

const updateGameBoard = (block) => {
  // Create IMG tag with X or O's game image depending on player's turn, and add to game board
  const imgSource = store.game.player1Move ? store.src1 : store.src2
  const imgHtml = `<img class="block-image" src="${imgSource}" alt="">`
  $(block).html(imgHtml)
}

const newGameSuccess = (responseData) => {
  // Display success message
  $('#message').text(`New Game`).show(400).removeClass().addClass('success')
  // Store new game id
  store.game.id = responseData.game._id
  setTimeout(() => {
    $('#message').hide(250)
  }, 1500)
}

const newGameFailure = () => {
  // Display failure message
  $('#message').text(`New Game Failed!`).show(400).removeClass().addClass('failure')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}

const updateGameSuccess = (responseData) => {
  // Store patch data
  store.patchData = responseData
}

const updateGameFailure = () => {
  // Display failure message
  $('#message').text(`Game Update Failed!`).show(400).removeClass().addClass('failure')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}

const getGamesSuccess = (responseData) => {
  const games = responseData.games

  // Calculate game statistics from API games array response
  gameLogic.countWins(games)

  // Generate html for stats list
  const statsHtml = (`
    <p>Games Completed: ${responseData.games.length}</p>
    <p>Wins: ${store.stats.win}</p>
    <p>Losses: ${store.stats.loss}</p>
    <p>Ties: ${store.stats.tie}</p>
    <p>Win/Loss Ratio: ${(store.stats.win / Math.max(store.stats.loss, 1)).toFixed(2)}</p>
    `)

  // Display stats list page with generated html
  $('#stats-list').html(statsHtml)
  $('#home-page').addClass('hidden')
  $('#stats-section').removeClass('hidden')
}

const getGamesFailure = () => {
  // Display failure message
  $('#message').text(`Stats failed!`).show(400).removeClass().addClass('failure')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}

module.exports = {
  renderNewGame,
  updateGameBoard,
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGamesSuccess,
  getGamesFailure
}
