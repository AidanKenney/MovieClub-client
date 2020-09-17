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

const onIndexCollectionsSuccess = function (response) {
  storeCollections.collections = response.collections
  console.log('Index request success! Here are your collections', response)
  $('#show-collections').html('Here are your collections ' + JSON.stringify(storeCollections.collections))
}

const onIndexCollectionsFailure = function (error) {
  console.log('Oh no... could not get collections', error)
}

const onDeleteCollectionSuccess = function (response) {
  console.log('Collection deleted successfully', response)
}

const onDeleteCollectionFailure = function (error) {
  console.log('Problem deleting collection. Error is', error)
}

module.exports = {
  onCreateCollectionSuccess: onCreateCollectionSuccess,
  onCreateCollectionFailure: onCreateCollectionFailure,
  onIndexCollectionsSuccess: onIndexCollectionsSuccess,
  onIndexCollectionsFailure: onIndexCollectionsFailure,
  onDeleteCollectionSuccess: onDeleteCollectionSuccess,
  onDeleteCollectionFailure: onDeleteCollectionFailure
}
