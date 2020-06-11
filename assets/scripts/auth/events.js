'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')

// (hidden) quick sign-in option
const quickIn = () => {
  const data = {
    credentials: {
      email: 'quick@quick.com',
      password: 'quick',
      confirm_password: 'quick'
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
    .then(removeCustomizations())
    .catch(ui.signOutFailure)
}

// Switch page view from sign-in to sign-up
const toSignUp = (event) => {
  event.preventDefault()

  $('#sign-in-section').addClass('hidden')
  $('#sign-up-section').removeClass('hidden')
}

// Switch page view from sign-up to sign-in
const toSignIn = (event) => {
  event.preventDefault()

  $('#sign-up-section').addClass('hidden')
  $('#sign-in-section').removeClass('hidden')
}

// Switch page view to password-change
const toChangePW = (event) => {
  event.preventDefault()

  $('.page').addClass('hidden')
  $('#change-pw-section').removeClass('hidden')
}

// Resets all selected customizations upon sign-out
const removeCustomizations = () => {
  store.src1 = `assets/game-pieces/x.png`
  store.src2 = `assets/game-pieces/circle.png`
  $('.custom-button-1').removeClass('btn-primary').removeClass('btn-success').addClass('btn-primary')
  $('.custom-button-2').removeClass('btn-primary').removeClass('btn-success').addClass('btn-primary')
  $('#x').removeClass('btn-primary').addClass('btn-success')
  $('#circle').removeClass('btn-primary').addClass('btn-success')
  $('body').removeClass().addClass('theme-blue')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePW,
  toSignUp,
  toSignIn,
  onSignOut,
  quickIn,
  toChangePW,
  removeCustomizations
}
