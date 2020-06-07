'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')

$(() => {
  $('#quick-in').on('click', events.quickIn)

  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-pw-form').on('submit', events.onChangePW)
  $('#sign-out-button').on('click', events.onSignOut)
  $('#change-pw-button').on('click', events.toChangePW)
  $('#toSignUp').on('click', events.toSignUp)
  $('#toSignIn').on('click', events.toSignIn)
  $('#block-0, #block-1, #block-2, #block-3, #block-4, #block-5, #block-6, #block-7, #block-8').on('click', events.onBlockSelect)
})
