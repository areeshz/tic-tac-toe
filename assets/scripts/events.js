'use strict'

const getFormFields = require('./../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const gameLogic = require('./game-logic.js')

// Remove quick sign in for production version
const quickIn = () => {
  const data = {
    credentials: {
      email: 'quick@aol.com',
      password: '123',
      confirm_password: 123
    }
  }

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignUp = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePW = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePW(data)
    .then(ui.changePWSuccess)
    .catch(ui.changePWFailure)
}

const onSignOut = (event) => {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const toSignUp = (event) => {
  event.preventDefault()

  $('#sign-in-section').addClass('hidden')
  $('#sign-up-section').removeClass('hidden')
}

const toSignIn = (event) => {
  event.preventDefault()

  $('#sign-up-section').addClass('hidden')
  $('#sign-in-section').removeClass('hidden')
}

const toChangePW = (event) => {
  event.preventDefault()

  $('#change-pw-section').removeClass('hidden')
}

const newGame = (event) => {
  // Hide home page section
  $('#home-page').addClass('hidden')

  // MODULARIZE CODE IF TIME

  // Show game board and ensure all spaces are clear / empty
  $('.game-box').html('')
  $('#game-board-section').removeClass('hidden')

  // Reset all local game storage
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
  onSignUp,
  onSignIn,
  onChangePW,
  toSignUp,
  toSignIn,
  onSignOut,
  quickIn,
  onBlockSelect,
  toChangePW,
  newGame
}
