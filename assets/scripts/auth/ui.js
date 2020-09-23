'use strict'

const store = require('./../store')
const storeAuthErrors = require('./../storeAuthErrors')

const onSignUpSuccess = function (response) {
  store.user = response.user
  $('#msg').text('Sign Up successful! Welcome ' + store.user.email + '. Please Sign In.')
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
  // $('#pw-warning').hide()
  $('#sign-in').show()
}
const onSignUpFailure = function (error) {
  storeAuthErrors.error = error
  console.log('Error! Error is', error)
  $('msg').text('Sign Up failed, please try again.')
  $('msg').show()
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#msg').text('Sign in successful! Welcome ' + store.user.email)
  $('#sign-in').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').hide()
  // $('#pw-warning').hide()
  $('.navbar').show()
  $('#sign-out').show()
  $('#change-password').show()
  $('.hide-on-front-page').show()
  $('#create-collection').show()
  $('#index-collections').show()
  $('#delete-collection').show()
  $('#update-collection').show()
  $('#create-movie').show()
  $('#update-movie').show()
  $('#delete-movie').show()
}

const onSignInFailure = function (error) {
  storeAuthErrors.error = error
  $('#msg').text('Sign in failed, please try again.')
  $('#sign-in').trigger('reset')
}

const onSignOutSuccess = function (response) {
  $('#msg').text('Sign out successful.')
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#create-collection').hide()
  $('#index-collections').hide()
  $('#delete-collection').hide()
  $('#update-collection').hide()
  $('#create-movie').hide()
  $('#update-movie').hide()
  $('#delete-movie').hide()
  $('.navbar').hide()
  $('#sign-up').show()
  $('#show-collections').hide()
}

const onSignOutFailure = function (error) {
  storeAuthErrors.error = error
  $('#msg').text('Sign out failed.')
}

const onChangePasswordSuccess = function (response) {
  $('#msg').text('Password changed successfully.')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function (error) {
  storeAuthErrors.error = error
  $('#msg').text('Password not changed, try again.')
  $('#change-password').trigger('reset')
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
