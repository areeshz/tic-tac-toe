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
  // $('#block-0, #block-1, #block-2, #block-3, #block-4, #block-5, #block-6, #block-7, #block-8').on('click', gameEvents.onBlockSelect)
})
