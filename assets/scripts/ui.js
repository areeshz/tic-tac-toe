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
  $('#message').text(`Sign In Successful! Welcome ${responseData.user.email}`).show().removeClass().addClass('success')

  store.user = responseData.user
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePWSuccess,
  changePWFailure
}
