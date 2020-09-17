'use strict'

const store = require('./../store')
const storeAuthErrors = require('./../storeAuthErrors')

const onSignUpSuccess = function (response) {
  store.user = response.user
  console.log('Sign up success! Respond is', store.user)
  // $('#msg').text('Sign Up successful! Welcome ' + store.user.email + '. Please Sign In.')
  $('#sign-up').trigger('reset')
  // $('#sign-up').hide()
  // $('#pw-warning').hide()
  // $('#sign-in').show()
}
const onSignUpFailure = function (error) {
  storeAuthErrors.error = error
  console.log('Error! Error is', error)
  // $('msg').text('Sign Up failed, please try again.')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  console.log('Sign in success! Respond is', store.user)
  // $('#msg').text('Sign in successful! Welcome ' + store.user.email)
  $('#sign-in').trigger('reset')
  // $('#sign-up').hide()
  // $('#sign-in').hide()
  // $('#pw-warning').hide()
  // $('#sign-out').show()
  // $('#change-password').show()
  // $('#new-game').show()
  // $('#get-all-games').show()
}

const onSignInFailure = function (error) {
  storeAuthErrors.error = error
  console.log('Error! Error is', error)
  // $('#msg').text('Sign in failed, please try again.')
  $('#sign-in').trigger('reset')
}

const onSignOutSuccess = function (response) {
  console.log('Sign Out successful!')
  // $('#msg').text('Sign out successful.')
  // $('#sign-out').hide()
  // $('#change-password').hide()
  // $('#gameBoard').hide()
  // $('#get-all-games').hide()
  // $('#new-game').hide()
  // $('#all-games').hide()
  // $('#win-msg').hide()
  // $('#sign-up').show()
  // $('#pw-warning').show()
}

const onSignOutFailure = function (error) {
  storeAuthErrors.error = error
  console.log('Error! Error is', error)
  // $('#msg').text('Sign out failed.')
  // $('#get-all-games').hide()
}

const onChangePasswordSuccess = function (response) {
  console.log('Change PW success! Response is', response)
  // $('#msg').text('Password changed successfully.')
  $('#change-password').trigger('reset')
  // $('#get-all-games').hide()
}
const onChangePasswordFailure = function (error) {
  storeAuthErrors.error = error
  console.log('Error! Error is', error)
  // $('#msg').text('Password not changed, try again.')
  $('#change-password').trigger('reset')
  // $('#get-all-games').hide()
}

const onLinkToSignIn = function () {
  $('#sign-up').hide()
  $('#sign-in').show()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onLinkToSignIn
}
