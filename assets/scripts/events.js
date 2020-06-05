'use strict'

const getFormFields = require('./../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

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

module.exports = {
  onSignUp,
  onSignIn,
  onChangePW
}
