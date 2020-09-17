'use strict'

const storeCollections = require('./../storeCollections')
// const storeAuthErrors = require('./../storeAuthErrors')

const onCreateCollectionSuccess = function (response) {
  storeCollections.collection = response.collection
  console.log('Create collections successful! Collection is', storeCollections.collection)
  // $('#msg').text('Sign Up successful! Welcome ' + store.user.email + '. Please Sign In.')
  $('#create-collection').trigger('reset')
  // $('#sign-up').hide()
  // $('#pw-warning').hide()
  // $('#sign-in').show()
}

const onCreateCollectionFailure = function (error) {
  console.log('Error! Error is', error)
}

module.exports = {
  onCreateCollectionSuccess: onCreateCollectionSuccess,
  onCreateCollectionFailure: onCreateCollectionFailure
}
