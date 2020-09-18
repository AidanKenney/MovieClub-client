'use strict'

const storeCollections = require('./../storeCollections')
const collectionEvents = require('./collectionEvents')
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
  $('#create-collection').trigger('reset')
}

const onIndexCollectionsSuccess = function (response) {
  storeCollections.collections = response.collections
  console.log('Index request success! Here are your collections', response)
  $('#show-collections').html('Here are your collections ' + JSON.stringify(storeCollections.collections, null, 2))
  $('#show-collections').show()
}

const onIndexCollectionsFailure = function (error) {
  console.log('Oh no... could not get collections', error)
}

const onDeleteCollectionSuccess = function (response) {
  console.log('Collection deleted successfully', response)
  $('#delete-collection').trigger('reset')
}

const onDeleteCollectionFailure = function (error) {
  console.log('Problem deleting collection. Error is', error)
  $('#delete-collection').trigger('reset')
}

const onUpdateCollectionSuccess = function (response) {
  console.log('Successfully updated collection', response)
  // $('#update-collection').trigger('reset')
  $('#show-collections').html('Here are your collections ' + JSON.stringify(storeCollections.collections, null, 2))
}

const onUpdateCollectionFailure = function (error) {
  console.log('Problem updating collection', error)
  $('#update-collection').trigger('reset')
}

const onLinkToSignIn = function () {
  $('#sign-up').hide()
  $('#sign-in').show()
}

module.exports = {
  onCreateCollectionSuccess: onCreateCollectionSuccess,
  onCreateCollectionFailure: onCreateCollectionFailure,
  onIndexCollectionsSuccess: onIndexCollectionsSuccess,
  onIndexCollectionsFailure: onIndexCollectionsFailure,
  onDeleteCollectionSuccess: onDeleteCollectionSuccess,
  onDeleteCollectionFailure: onDeleteCollectionFailure,
  onUpdateCollectionSuccess: onUpdateCollectionSuccess,
  onUpdateCollectionFailure: onUpdateCollectionFailure,
  onLinkToSignIn: onLinkToSignIn
}
