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
  const imgSource = store.game.player1Move ? 'assets/game-pieces/x.png' : 'assets/game-pieces/circle.png'
  const imgHtml = `<img class="block-image" src="${imgSource}" alt="">`
  $(block).html(imgHtml)
  console.log(`x's move? `, store.game.player1Move) // **remove once function is finished
}

const newGameSuccess = (responseData) => {
  $('#message').text(`New Game`).show(400).removeClass().addClass('success')
  console.log('responseData is \n', responseData)
  // store.game.over = false
  store.game.id = responseData.game._id
  console.log('store is \n', store)
  setTimeout(() => {
    $('#message').hide(250)
  }, 1500)
}

const newGameFailure = () => {
  $('#message').text(`New Game Failed!`).show(400).removeClass().addClass('failure')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}

const updateGameSuccess = (responseData) => {
  console.log('game updated successfully')
  console.log(responseData)
}

const updateGameFailure = () => {
  console.log(`game update FAILED`)
}

const getGamesSuccess = (responseData) => {
  console.log(responseData)
  const games = responseData.games
  gameLogic.countWins(games)

  const statsHtml = (`
    <p>Games Completed: ${responseData.games.length}</p>
    <p>Wins: ${store.stats.win}</p>
    <p>Losses: ${store.stats.loss}</p>
    <p>Ties: ${store.stats.tie}</p>
    <p>Win/Loss Ratio: ${(store.stats.win / store.stats.loss).toFixed(2)}</p>
    `)
  console.log(store)
  $('#stats-list').html(statsHtml)
  $('#home-page').addClass('hidden')
  $('#stats-section').removeClass('hidden')
}

const getGamesFailure = () => {
  console.log('something went wrong')
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
