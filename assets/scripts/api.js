'use strict'

const config = require('./config.js')

const signUp = (data) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: {
      credentials: {
        email: data.credentials.email,
        password: data.credentials.password,
        password_confirmation: data.credentials.password_confirmation
      }
    }
  })
}

const signIn = (data) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: {
      credentials: {
        email: data.credentials.email,
        password: data.credentials.password
      }
    }
  })
}

module.exports = {
  signUp,
  signIn
}
