'use strict'
const store = require('./../store.js')

const signUpSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#message').text(`Sign Up Successful! Welcome ${responseData.user.email}.`).show(400).removeClass().addClass('success')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}

const signUpFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Sign Up Failure! Please check for something wrong.').show(400).removeClass().addClass('failure')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
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
  $('#change-pw-button').removeClass('hidden')
  $('#home-page').removeClass('hidden')
  // $('#game-board-section').removeClass('hidden') // Move this to when the new game button is clicked on home page
}

const signInFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Sign In Failure. Either the Email or Password is incorrect.').show(400).removeClass().addClass('failure')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}

const changePWSuccess = () => {
  $('form').trigger('reset')
  $('#change-pw-section').addClass('hidden')
  $('#message').text('Password Changed Successfully').show(400).removeClass().addClass('success')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}

const changePWFailure = () => {
  $('form').trigger('reset')
  $('#change-pw-section').addClass('hidden')
  $('#message').text('Password Change Unsuccessful').show(400).removeClass().addClass('failure')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}

const signOutSuccess = () => {
  $('#message').text('Signed Out').show(400).removeClass().addClass('success')
  $('#sign-out-button').addClass('hidden')
  $('#change-pw-section').addClass('hidden')
  $('#game-board-section').addClass('hidden')
  $('#change-pw-button').addClass('hidden')
  $('#sign-in-section').removeClass('hidden')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}

const signOutFailure = () => {
  $('#message').text('Sign Out Unsuccessful').show(400).removeClass().addClass('failure')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePWSuccess,
  changePWFailure,
  signOutSuccess,
  signOutFailure
}
