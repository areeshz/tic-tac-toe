'use strict'
const store = require('./../store.js')

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
  console.log(store.game.player1Move) // **remove once function is finished
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

module.exports = {
  renderNewGame,
  updateGameBoard,
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGameFailure
}
