'use strict'
const store = require('./store.js')

const signUpSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#message').text(`Sign Up Successful! Welcome ${responseData.user.email}.`).show().removeClass().addClass('success')
}

const signUpFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Sign Up Failure! Please check for something wrong.').show().removeClass().addClass('failure')
}

const signInSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#message').text(`Sign In Successful! Welcome ${responseData.user.email}`).show(400).removeClass().addClass('success')

  store.user = responseData.user
  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)

  $('#sign-in-section').addClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#change-pw-section').removeClass('hidden')
  $('#game-board-section').removeClass('hidden')
}

const signInFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Sign In Failure. Either the Email or Password is incorrect.').show().removeClass().addClass('failure')
}

const changePWSuccess = () => {
  $('form').trigger('reset')
  $('#message').text('Password Changed Successfully').show().removeClass().addClass('success')
}

const changePWFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Password Change Unsuccessful').show().removeClass().addClass('failure')
}

const signOutSuccess = () => {
  $('#message').text('Signed Out').show(400).removeClass().addClass('success')
  $('#sign-out-button').addClass('hidden')
  $('#change-pw-section').addClass('hidden')
  $('#sign-in-section').removeClass('hidden')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}

const signOutFailure = () => {
  $('#message').text('Sign Out Unsuccessful').show().removeClass().addClass('failure')
}

const updateGameBoard = (block) => {
  const imgSource = store.player1Move ? 'assets/game-pieces/x.png' : 'assets/game-pieces/circle.png'
  const imgHtml = `<img class="block-image" src="${imgSource}" alt="">`
  $(block).html(imgHtml)
  console.log(store.player1Move) // remove once function is finished
  store.player1Move = !store.player1Move // move this to game logic once initiated. Change move status after API call
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePWSuccess,
  changePWFailure,
  signOutSuccess,
  signOutFailure,
  updateGameBoard
}
