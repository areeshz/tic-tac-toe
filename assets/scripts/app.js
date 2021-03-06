'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  // Authentication-related handlers
  $('#quick-in').on('click', authEvents.quickIn)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-pw-form').on('submit', authEvents.onChangePW)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#change-pw-button').on('click', authEvents.toChangePW)
  $('#toSignUp').on('click', authEvents.toSignUp)
  $('#toSignIn').on('click', authEvents.toSignIn)

  // Game/inner-app related handlers
  $('#new-game-button').on('click', gameEvents.onNewGame)
  $('#stats-button').on('click', gameEvents.onStatsPage)
  $('#customize-button').on('click', gameEvents.onCustomize)
  $('.to-home').on('click', gameEvents.toHome)
  $('.custom-button-1').on('click', gameEvents.changeSymbolOne)
  $('.custom-button-2').on('click', gameEvents.changeSymbolTwo)
  $('.theme-button').on('click', gameEvents.changeTheme)
})
