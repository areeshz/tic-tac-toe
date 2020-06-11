'use strict'
const store = require('./../store.js')

const signUpSuccess = (responseData) => {
  // Display sign up success and direct user to sign-in page
  $('form').trigger('reset')
  $('#message').text(`Sign Up Successful! Welcome ${responseData.user.email}.`).show(400).removeClass().addClass('success')
  $('.page').addClass('hidden')
  $('#sign-in-section').removeClass('hidden')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}

const signUpFailure = () => {
  $('form').trigger('reset')
  // Display failure message
  $('#message').text('Sign Up Failure! Please check that your confirm password is correct.').show(400).removeClass().addClass('failure')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}

const signInSuccess = (responseData) => {
  $('form').trigger('reset')
  // Display sign-in success message
  $('#message').text(`Sign In Successful!`).show(400).removeClass().addClass('success')
  $('#welcome-message').text(`Welcome, ${responseData.user.email}`)

  store.user = responseData.user
  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)

  // Reveal home page to user, with change-password and sign-out options
  $('#sign-in-section').addClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#change-pw-button').removeClass('hidden')
  $('#home-page').removeClass('hidden')
}

const signInFailure = () => {
  $('form').trigger('reset')
  // Display failure message
  $('#message').text('Sign In Failure. Either the Email or Password is incorrect.').show(400).removeClass().addClass('failure')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}

const changePWSuccess = () => {
  $('form').trigger('reset')
  // Direct user back to home page and display success message
  $('#change-pw-section').addClass('hidden')
  $('#home-page').removeClass('hidden')
  $('#message').text('Password Changed Successfully').show(400).removeClass().addClass('success')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}

const changePWFailure = () => {
  $('form').trigger('reset')
  // Display failure message
  $('#message').text('Password Change Unsuccessful').show(400).removeClass().addClass('failure')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}

const signOutSuccess = () => {
  $('#message').text('Signed Out').show(400).removeClass().addClass('success')
  // Remove buttons from the nav bar
  $('#sign-out-button').addClass('hidden')
  $('#change-pw-button').addClass('hidden')

  // Redirect user to sign-in page
  $('.page').addClass('hidden')
  $('#sign-in-section').removeClass('hidden')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}

const signOutFailure = () => {
  // Display failure message
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
