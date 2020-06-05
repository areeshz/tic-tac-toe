'use strict'

const signUpSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#message').text(`Sign Up Successful! Welcome ${responseData.user.email}.`).show().removeClass().addClass('success')
}

const signUpFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Sign Up Failure! Please check for something wrong.').show().removeClass().addClass('failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
